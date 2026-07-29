import { prisma } from "../../config/prisma.js";

const ESTADOS_CANCELABLES = ["pendiente", "aprobada"];

export const listarSolicitudes = async () => {
  return prisma.solicitud.findMany({
    include: {
      usuarioSolicitante: { select: { id: true, nombre: true } },
      vehiculoAsignado: { select: { id: true, placa: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const listarSolicitudesPorUsuario = async (usuarioId) => {
  return prisma.solicitud.findMany({
    where: { usuarioSolicitanteId: usuarioId },
    include: { vehiculoAsignado: { select: { id: true, placa: true } } },
    orderBy: { createdAt: "desc" },
  });
};

export const obtenerSolicitudPorId = async (id) => {
  return prisma.solicitud.findUnique({
    where: { id },
    include: {
      usuarioSolicitante: { select: { id: true, nombre: true } },
      vehiculoAsignado: true,
      aprobadoPor: { select: { id: true, nombre: true } },
    },
  });
};

export const crearSolicitud = async ({ usuarioSolicitanteId, motivo, destino, fechaRequerida }) => {
  return prisma.solicitud.create({
    data: { usuarioSolicitanteId, motivo, destino, fechaRequerida: new Date(fechaRequerida) },
  });
};

export const aprobarSolicitud = async ({ id, vehiculoAsignadoId, aprobadoPorId }) => {
  const solicitud = await prisma.solicitud.findUnique({ where: { id } });

  if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };
  if (solicitud.estado !== "pendiente")
    throw { status: 409, message: "Solo se puede aprobar una solicitud pendiente" };

  const vehiculo = await prisma.vehiculo.findUnique({ where: { id: vehiculoAsignadoId } });
  if (!vehiculo || !vehiculo.activo) throw { status: 404, message: "Vehículo no encontrado o inactivo" };

  return prisma.solicitud.update({
    where: { id },
    data: { estado: "aprobada", vehiculoAsignadoId, aprobadoPorId },
  });
};

export const rechazarSolicitud = async ({ id, aprobadoPorId }) => {
  const solicitud = await prisma.solicitud.findUnique({ where: { id } });

  if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };
  if (solicitud.estado !== "pendiente")
    throw { status: 409, message: "Solo se puede rechazar una solicitud pendiente" };

  return prisma.solicitud.update({
    where: { id },
    data: { estado: "rechazada", aprobadoPorId },
  });
};

export const cancelarSolicitud = async ({ id, usuarioId, esAdmin }) => {
  const solicitud = await prisma.solicitud.findUnique({ where: { id } });

  if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };

  if (!esAdmin && solicitud.usuarioSolicitanteId !== usuarioId)
    throw { status: 403, message: "No puedes cancelar una solicitud que no es tuya" };

  if (!ESTADOS_CANCELABLES.includes(solicitud.estado))
    throw { status: 409, message: `No se puede cancelar una solicitud en estado ${solicitud.estado}` };

  return prisma.solicitud.update({ where: { id }, data: { estado: "cancelada" } });
};