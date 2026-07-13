import {
  obtenerSolicitudAprobadaPendiente,
  crearPreoperacional,
  listarPreoperacionales,
  listarPreoperacionalesPorUsuario,
  obtenerPreoperacionalPorId,
} from "./preoperacionales.service.js";

export const getSolicitudPendiente = async (req, res) => {
  const solicitud = await obtenerSolicitudAprobadaPendiente(req.usuario.id);
  res.json(solicitud); // null si no tiene -> frontend decide si muestra el paso
};

export const postPreoperacional = async (req, res) => {
  const { vehiculoId, respuestas, firmaUrl, observaciones, solicitudId } = req.body;

  try {
    const preoperacional = await crearPreoperacional({
      usuarioId: req.usuario.id, 
      vehiculoId,
      respuestas,
      firmaUrl,
      observaciones,
      solicitudId,
    });
    res.status(201).json(preoperacional);
  } catch (error) {
    const status = error.status || 500;
    if (!error.status) console.error(error);
    res.status(status).json({ error: error.message || "Error al crear preoperacional" });
  }
};

export const getPreoperacionales = async (req, res) => {
  res.json(await listarPreoperacionales());
};

export const getMisPreoperacionales = async (req, res) => {
  res.json(await listarPreoperacionalesPorUsuario(req.usuario.id));
};

export const getPreoperacionalPorId = async (req, res) => {
  const id = Number(req.params.id);
  const preoperacional = await obtenerPreoperacionalPorId(id);

  if (!preoperacional) return res.status(404).json({ error: "Preoperacional no encontrado" });

  // conductor solo ve los suyos, admin ve todos
  if (req.usuario.rol !== "administrador" && preoperacional.usuarioId !== req.usuario.id) {
    return res.status(403).json({ error: "No tienes permiso para ver este registro" });
  }

  res.json(preoperacional);
};