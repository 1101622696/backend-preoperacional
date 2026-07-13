import {
  listarVehiculos,
  obtenerVehiculoPorId,
  crearVehiculo,
  actualizarVehiculo,
  desactivarVehiculo,
} from "./vehiculos.service.js";

export const getVehiculos = async (req, res) => {
  const vehiculos = await listarVehiculos();
  res.json(vehiculos);
};

export const getVehiculoPorId = async (req, res) => {
  const id = Number(req.params.id);
  const vehiculo = await obtenerVehiculoPorId(id);

  if (!vehiculo) {
    return res.status(404).json({ error: "Vehículo no encontrado" });
  }
  res.json(vehiculo);
};

export const postVehiculo = async (req, res) => {
  const { placa, marca, modelo, tieneGpsFisico, polizaUrl, soatUrl, tecnomecanicaUrl } = req.body;

  try {
    const vehiculo = await crearVehiculo({
      placa,
      marca,
      modelo,
      tieneGpsFisico,
      polizaUrl,
      soatUrl,
      tecnomecanicaUrl,
    });
    res.status(201).json(vehiculo);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Ya existe un vehículo con esa placa" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al crear vehículo" });
  }
};

export const putVehiculo = async (req, res) => {
  const id = Number(req.params.id);
  const { marca, modelo, tieneGpsFisico, polizaUrl, soatUrl, tecnomecanicaUrl } = req.body;

  try {
    const vehiculo = await actualizarVehiculo(id, {
      marca,
      modelo,
      tieneGpsFisico,
      polizaUrl,
      soatUrl,
      tecnomecanicaUrl,
    });
    res.json(vehiculo);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al actualizar vehículo" });
  }
};

export const patchDesactivarVehiculo = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const vehiculo = await desactivarVehiculo(id);
    res.json(vehiculo);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al desactivar vehículo" });
  }
};