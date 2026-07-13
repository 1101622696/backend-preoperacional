import { prisma } from "../../config/prisma.js";
import bcrypt from "bcrypt";

export const listarUsuariosActivos = async () => {
  return prisma.usuario.findMany({ where: { activo: true } });
};

export const obtenerUsuarioPorId = async (id) => {
  return prisma.usuario.findUnique({
    where: { id },
  });
};

export const obtenerUsuarioPorEmail = async (email) => {
  return prisma.usuario.findUnique({ where: { email } });
};

const SALT_ROUNDS = 10;

export const crearUsuario = async ({ nombre, cedula, email, password, rol, origen }) => {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  return prisma.usuario.create({
    data: {
      nombre,
      cedula,
      email,
      passwordHash,
      rol,
      origen,
    },
    select: {
      id: true,
      nombre: true,
      cedula: true,
      email: true,
      rol: true,
      origen: true,
      activo: true,
      createdAt: true,
      // passwordHash NO va aquí, nunca se devuelve
    },
  });
};

export const actualizarUsuario = async (id, { nombre, email, rol }) => {
  return prisma.usuario.update({
    where: { id },
    data: { nombre, email, rol },
    select: {
      id: true,
      nombre: true,
      cedula: true,
      email: true,
      rol: true,
      origen: true,
      activo: true,
      createdAt: true,
    },
  });
};

export const cambiarPassword = async (id, nuevaPassword) => {
  const passwordHash = await bcrypt.hash(nuevaPassword, SALT_ROUNDS);
  return prisma.usuario.update({
    where: { id },
    data: { passwordHash },
    select: { id: true }, // no hace falta devolver más
  });
};

export const desactivarUsuario = async (id) => {
  return prisma.usuario.update({
    where: { id },
    data: { activo: false },
    select: { id: true, activo: true },
  });
};