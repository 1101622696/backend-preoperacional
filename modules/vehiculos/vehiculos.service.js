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