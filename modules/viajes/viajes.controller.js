import {
  iniciarViaje, finalizarViaje, guardarPuntosGps,
  listarViajesPorUsuario, obtenerViajePorId, obtenerPuntosDeViaje,
} from "./viajes.service.js";

const manejarError = (res, error, mensajeDefault) => {
  const status = error.status || 500;
  if (!error.status) console.error(error);
  res.status(status).json({ error: error.message || mensajeDefault });
};

export const postIniciarViaje = async (req, res) => {
  const { id, vehiculoId, preoperacionalId, horaInicio } = req.body;
  try {
    const viaje = await iniciarViaje({ id, vehiculoId, conductorId: req.usuario.id, preoperacionalId, horaInicio });
    res.status(201).json(viaje);
  } catch (error) {
    if (error.code === "P2002") return res.status(409).json({ error: "Ese id de viaje ya existe" });
    manejarError(res, error, "Error al iniciar viaje");
  }
};

export const patchFinalizarViaje = async (req, res) => {
  const { horaFin, distanciaTotalKm, velocidadPromedio, velocidadMaxima } = req.body;
  try {
    const viaje = await finalizarViaje({
      id: req.params.id, conductorId: req.usuario.id,
      horaFin, distanciaTotalKm, velocidadPromedio, velocidadMaxima,
    });
    res.json(viaje);
  } catch (error) {
    manejarError(res, error, "Error al finalizar viaje");
  }
};

export const postPuntosGps = async (req, res) => {
  try {
    const resultado = await guardarPuntosGps(req.params.id, req.body.puntos);
    res.status(201).json(resultado);
  } catch (error) {
    manejarError(res, error, "Error al guardar puntos GPS");
  }
};

export const getMisViajes = async (req, res) => {
  res.json(await listarViajesPorUsuario(req.usuario.id));
};

export const getViajePorId = async (req, res) => {
  const viaje = await obtenerViajePorId(req.params.id);
  if (!viaje) return res.status(404).json({ error: "Viaje no encontrado" });
  if (req.usuario.rol !== "administrador" && viaje.conductorId !== req.usuario.id) {
    return res.status(403).json({ error: "No tienes permiso para ver este viaje" });
  }
  res.json(viaje);
};

export const getPuntosDeViaje = async (req, res) => {
  res.json(await obtenerPuntosDeViaje(req.params.id));
};