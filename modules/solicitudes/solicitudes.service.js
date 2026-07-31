import { prisma } from "../../config/prisma.js";
import { enviarNotificacion } from "../notificaciones/notificaciones.service.js";

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
  const solicitante = await prisma.usuario.findUnique({ where: { id: usuarioSolicitanteId } });

  const solicitud = await prisma.solicitud.create({
    data: { usuarioSolicitanteId, motivo, destino, fechaRequerida: new Date(fechaRequerida) },
  });

  const admins = await prisma.usuario.findMany({
    where: { rol: "administrador", activo: true, fcmToken: { not: null } },
  });

  await Promise.all(
    admins.map((admin) =>
      enviarNotificacion(admin.fcmToken, {
        titulo: "Nueva solicitud de vehículo",
        cuerpo: `${solicitante.nombre} solicitó un vehículo para ${destino}`,
        data: { tipo: "solicitud_creada", solicitudId: String(solicitud.id) },
      })
    )
  );

  return solicitud;
};

export const aprobarSolicitud = async ({ id, vehiculoAsignadoId, aprobadoPorId }) => {
  const solicitud = await prisma.solicitud.findUnique({ where: { id } });

  if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };
  if (solicitud.estado !== "pendiente")
    throw { status: 409, message: "Solo se puede aprobar una solicitud pendiente" };

  const vehiculo = await prisma.vehiculo.findUnique({ where: { id: vehiculoAsignadoId } });
  if (!vehiculo || !vehiculo.activo) throw { status: 404, message: "Vehículo no encontrado o inactivo" };

  const actualizada = await prisma.solicitud.update({
    where: { id },
    data: {
      estado: "aprobada",
      vehiculoAsignadoId,
      aprobadoPorId,
    },
  });

  const solicitante = await prisma.usuario.findUnique({
    where: { id: actualizada.usuarioSolicitanteId },
  });

  if (solicitante?.fcmToken) {
    await enviarNotificacion(solicitante.fcmToken, {
      titulo: "Solicitud aprobada",
      cuerpo: `Tu solicitud a ${actualizada.destino} fue aprobada`,
      data: {
        tipo: "solicitud_actualizada",
        solicitudId: String(actualizada.id),
      },
    });
  }

  return actualizada;
};

export const rechazarSolicitud = async ({ id, aprobadoPorId }) => {
  const solicitud = await prisma.solicitud.findUnique({ where: { id } });

  if (!solicitud) throw { status: 404, message: "Solicitud no encontrada" };
  if (solicitud.estado !== "pendiente")
    throw { status: 409, message: "Solo se puede rechazar una solicitud pendiente" };

 const actualizada = await prisma.solicitud.update({
    where: { id },
    data: {
      estado: "rechazada",
      aprobadoPorId,
    },
  });

  const solicitante = await prisma.usuario.findUnique({
    where: { id: actualizada.usuarioSolicitanteId },
  });

  if (solicitante?.fcmToken) {
    await enviarNotificacion(solicitante.fcmToken, {
      titulo: "Solicitud rechazada",
      cuerpo: `Tu solicitud a ${actualizada.destino} fue rechazada`,
      data: {
        tipo: "solicitud_actualizada",
        solicitudId: String(actualizada.id),
      },
    });
  }

  return actualizada;
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