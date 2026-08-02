import { prisma } from "../../config/prisma.js";

export const listarVehiculos = async () => {
  return prisma.vehiculo.findMany({ where: { activo: true } });
};

export const obtenerVehiculoPorId = async (id) => {
  return prisma.vehiculo.findUnique({ where: { id } });
};

export const crearVehiculo = async (data) => {
  return prisma.vehiculo.create({ data });
};

export const actualizarVehiculo = async (id, data) => {
  return prisma.vehiculo.update({ where: { id }, data });
};

export const desactivarVehiculo = async (id) => {
  return prisma.vehiculo.update({
    where: { id },
    data: { activo: false },
    select: { id: true, activo: true },
  });
};

export const cargarVehiculosMasivo = async (filas) => {
  const resultados = { creados: 0, errores: [] };

  for (const [index, fila] of filas.entries()) {
    try {
      const placa = normalizarPlaca(fila.placa || "");
      if (!placa) throw new Error("Placa vacía");

      await prisma.vehiculo.create({
        data: {
          placa,
          marca: fila.marca || null,
          modelo: fila.modelo || null,
          tieneGpsFisico: ["si", "true", "1"].includes(String(fila.tiene_gps_fisico).toLowerCase()),
          tipoPropiedad: fila.tipo_propiedad || "empresa",
          sucursalId: fila.sucursal_id ? Number(fila.sucursal_id) : null,
        },
      });
      resultados.creados++;
    } catch (error) {
      const motivo = error.code === "P2002" ? "Placa duplicada" : error.message;
      resultados.errores.push({ fila: index + 2, placa: fila.placa, motivo }); // +2 = por el header y base 1
    }
  }

  return resultados;
};