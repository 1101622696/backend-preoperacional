import { prisma } from "../../config/prisma.js";

export const obtenerSolicitudAprobadaPendiente = async (usuarioId) => {
  return prisma.solicitud.findFirst({
    where: { usuarioSolicitanteId: usuarioId, estado: "aprobada" },
    include: { vehiculoAsignado: true },
    orderBy: { fechaRequerida: "asc" },
  });
};

export const crearPreoperacional = async ({ usuarioId, vehiculoId, respuestas, firmaUrl, observaciones, solicitudId }) => {
  let solicitud = null;

  if (solicitudId) {
    solicitud = await prisma.solicitud.findUnique({ where: { id: solicitudId } });

    if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };
    if (solicitud.usuarioSolicitanteId !== usuarioId)
      throw { status: 403, message: "Esta solicitud no pertenece al usuario" };
    if (solicitud.estado !== "aprobada")
      throw { status: 409, message: "La solicitud no está en estado aprobada" };
    if (solicitud.vehiculoAsignadoId !== vehiculoId)
      throw { status: 409, message: "El vehículo no coincide con el asignado en la solicitud" };
  }

  // Transacción: crear el preoperacional y marcar la solicitud como completada
  // deben ocurrir juntos o no ocurrir ninguno (evita solicitudes "huérfanas" a medio actualizar)
  return prisma.$transaction(async (tx) => {
    const preoperacional = await tx.preoperacional.create({
      data: { usuarioId, vehiculoId, respuestas, firmaUrl, observaciones, solicitudId: solicitudId ?? null },
    });

    if (solicitud) {
      await tx.solicitud.update({ where: { id: solicitud.id }, data: { estado: "completada" } });
    }

    return preoperacional;
  });
};

export const listarPreoperacionales = async () => {
  return prisma.preoperacional.findMany({
    include: {
      usuario: { select: { id: true, nombre: true } },
      vehiculo: { select: { id: true, placa: true } },
    },
    orderBy: { fecha: "desc" },
  });
};

export const listarPreoperacionalesPorUsuario = async (usuarioId) => {
  return prisma.preoperacional.findMany({
    where: { usuarioId },
    include: { vehiculo: { select: { id: true, placa: true } } },
    orderBy: { fecha: "desc" },
  });
};

export const obtenerPreoperacionalPorId = async (id) => {
  return prisma.preoperacional.findUnique({
    where: { id },
    include: {
      usuario: { select: { id: true, nombre: true } },
      vehiculo: true,
      solicitud: true,
    },
  });
};