import { prisma } from "../../config/prisma.js";

const PRECISION_MAXIMA_ACEPTABLE = 100; // metros; puntos con peor precisión se descartan

// viajes.service.js — modificar iniciarViaje
export const iniciarViaje = async ({ id, vehiculoId, conductorId, preoperacionalId, horaInicio }) => {
  const vehiculo = await prisma.vehiculo.findUnique({ where: { id: vehiculoId } });
  if (!vehiculo || !vehiculo.activo) throw { status: 404, message: "Vehículo no encontrado o inactivo" };
  if (vehiculo.tieneGpsFisico)
    throw { status: 409, message: "Este vehículo ya cuenta con GPS físico, no requiere tracking por app" };

  const inicioDelDia = new Date(); inicioDelDia.setHours(0, 0, 0, 0);
  const preoperacionalHoy = await prisma.preoperacional.findFirst({
    where: { usuarioId: conductorId, vehiculoId, fecha: { gte: inicioDelDia } },
  });
  if (!preoperacionalHoy)
    throw { status: 409, message: "Debes completar el preoperacional de hoy antes de iniciar un viaje" };

  return prisma.viaje.create({
    data: {
      id, vehiculoId, conductorId,
      preoperacionalId: preoperacionalId ?? preoperacionalHoy.id, // se autocompleta si no lo mandan
      horaInicio: new Date(horaInicio),
      estado: "en_curso",
    },
  });
};

export const finalizarViaje = async ({ id, conductorId, horaFin, distanciaTotalKm, velocidadPromedio, velocidadMaxima }) => {
  const viaje = await prisma.viaje.findUnique({ where: { id } });

  if (!viaje) throw { status: 404, message: "Viaje no encontrado" };
  if (viaje.conductorId !== conductorId) throw { status: 403, message: "Este viaje no te pertenece" };
  if (viaje.estado === "finalizado") throw { status: 409, message: "El viaje ya está finalizado" };

  return prisma.viaje.update({
    where: { id },
    data: {
      horaFin: new Date(horaFin),
      distanciaTotalKm,
      velocidadPromedio,
      velocidadMaxima,
      estado: "finalizado",
    },
  });
};

// Insertar puntos GPS en batch usando SQL crudo, porque `ubicacion` es Unsupported (PostGIS)
export const guardarPuntosGps = async (viajeId, puntos) => {
  const viaje = await prisma.viaje.findUnique({ where: { id: viajeId } });
  if (!viaje) throw { status: 404, message: "Viaje no encontrado" };

  const puntosValidos = puntos.filter(
    (p) => p.precision === undefined || p.precision <= PRECISION_MAXIMA_ACEPTABLE
  );

  if (puntosValidos.length === 0) return { insertados: 0, descartados: puntos.length };

  // Se hace en una transacción para que el batch sea todo o nada
  await prisma.$transaction(
    puntosValidos.map((p) =>
      prisma.$executeRaw`
        INSERT INTO "PuntoGps" ("viajeId", "ubicacion", "velocidad", "precision", "timestamp")
        VALUES (
          ${viajeId},
          ST_SetSRID(ST_MakePoint(${p.lng}, ${p.lat}), 4326)::geography,
          ${p.velocidad ?? null},
          ${p.precision ?? null},
          ${new Date(p.timestamp)}
        )
      `
    )
  );

  return { insertados: puntosValidos.length, descartados: puntos.length - puntosValidos.length };
};

export const listarViajesPorUsuario = async (conductorId) => {
  return prisma.viaje.findMany({
    where: { conductorId },
    include: { vehiculo: { select: { id: true, placa: true } } },
    orderBy: { horaInicio: "desc" },
  });
};

export const obtenerViajePorId = async (id) => {
  return prisma.viaje.findUnique({
    where: { id },
    include: { vehiculo: true, conductor: { select: { id: true, nombre: true } } },
  });
};

// Trae los puntos de un viaje como GeoJSON, para pintar la ruta en un mapa desde el frontend
export const obtenerPuntosDeViaje = async (viajeId) => {
  return prisma.$queryRaw`
    SELECT
      id,
      ST_Y(ubicacion::geometry) AS lat,
      ST_X(ubicacion::geometry) AS lng,
      velocidad,
      precision,
      timestamp
    FROM "PuntoGps"
    WHERE "viajeId" = ${viajeId}
    ORDER BY timestamp ASC
  `;
};