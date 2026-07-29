import {
  listarSolicitudes,
  listarSolicitudesPorUsuario,
  obtenerSolicitudPorId,
  crearSolicitud,
  aprobarSolicitud,
  rechazarSolicitud,
  cancelarSolicitud,
} from "./solicitudes.service.js";

const manejarError = (res, error, mensajeDefault) => {
  const status = error.status || 500;
  if (!error.status) console.error(error);
  res.status(status).json({ error: error.message || mensajeDefault });
};

export const getSolicitudes = async (req, res) => {
  res.json(await listarSolicitudes());
};

export const getMisSolicitudes = async (req, res) => {
  res.json(await listarSolicitudesPorUsuario(req.usuario.id));
};

export const getSolicitudPorId = async (req, res) => {
  const solicitud = await obtenerSolicitudPorId(Number(req.params.id));
  if (!solicitud) return res.status(404).json({ error: "Solicitud no encontrada" });

  if (req.usuario.rol !== "administrador" && solicitud.usuarioSolicitanteId !== req.usuario.id) {
    return res.status(403).json({ error: "No tienes permiso para ver esta solicitud" });
  }
  res.json(solicitud);
};

export const postSolicitud = async (req, res) => {
  const { motivo, destino, fechaRequerida } = req.body;
  try {
    const solicitud = await crearSolicitud({ usuarioSolicitanteId: req.usuario.id, motivo, destino, fechaRequerida });
    res.status(201).json(solicitud);
  } catch (error) {
    manejarError(res, error, "Error al crear solicitud");
  }
};

export const patchAprobar = async (req, res) => {
  try {
    const solicitud = await aprobarSolicitud({
      id: Number(req.params.id),
      vehiculoAsignadoId: req.body.vehiculoAsignadoId,
      aprobadoPorId: req.usuario.id,
    });
    res.json(solicitud);
  } catch (error) {
    manejarError(res, error, "Error al aprobar solicitud");
  }
};

export const patchRechazar = async (req, res) => {
  try {
    const solicitud = await rechazarSolicitud({ id: Number(req.params.id), aprobadoPorId: req.usuario.id });
    res.json(solicitud);
  } catch (error) {
    manejarError(res, error, "Error al rechazar solicitud");
  }
};

export const patchCancelar = async (req, res) => {
  try {
    const solicitud = await cancelarSolicitud({
      id: Number(req.params.id),
      usuarioId: req.usuario.id,
      esAdmin: req.usuario.rol === "administrador",
    });
    res.json(solicitud);
  } catch (error) {
    manejarError(res, error, "Error al cancelar solicitud");
  }
};