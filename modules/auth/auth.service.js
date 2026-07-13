import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { prisma } from "../../config/prisma.js";
import { obtenerUsuarioPorEmail } from "../usuarios/usuarios.service.js";

const REFRESH_EXPIRES_DAYS = 30;

// Hash determinístico solo para poder buscar el token en la BD
const hashToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

const generarAccessToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN } // ej. "15m"
  );
};

const generarYGuardarRefreshToken = async (usuarioId) => {
  const token = crypto.randomBytes(64).toString("hex"); // token opaco, no es un JWT
  const expiresAt = new Date(Date.now() + REFRESH_EXPIRES_DAYS * 24 * 60 * 60 * 1000);

  await prisma.refreshToken.create({
    data: {
      token: hashToken(token),
      usuarioId,
      expiresAt,
    },
  });

  return token; // el token "crudo" es el que se manda al cliente, nunca el hash
};

export const login = async (email, password) => {
  const usuario = await obtenerUsuarioPorEmail(email);

  if (!usuario || !usuario.activo) {
    throw { status: 401, message: "Credenciales inválidas" };
  }

  const passwordValida = await bcrypt.compare(password, usuario.passwordHash);
  if (!passwordValida) {
    throw { status: 401, message: "Credenciales inválidas" };
  }

  const accessToken = generarAccessToken(usuario);
  const refreshToken = await generarYGuardarRefreshToken(usuario.id);

  return {
    accessToken,
    refreshToken,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
  };
};

export const refrescarSesion = async (refreshTokenCrudo) => {
  if (!refreshTokenCrudo) {
    throw { status: 401, message: "Refresh token no proporcionado" };
  }

  const tokenHash = hashToken(refreshTokenCrudo);

  const registro = await prisma.refreshToken.findUnique({
    where: { token: tokenHash },
    include: { usuario: true },
  });

  if (!registro || registro.revocado || registro.expiresAt < new Date()) {
    throw { status: 401, message: "Refresh token inválido o expirado" };
  }

  if (!registro.usuario.activo) {
    throw { status: 401, message: "Usuario inactivo" };
  }

  // Rotación: invalidamos el refresh token usado y emitimos uno nuevo.
  // Esto limita el daño si alguien roba un refresh token viejo.
  await prisma.refreshToken.update({
    where: { id: registro.id },
    data: { revocado: true },
  });

  const nuevoAccessToken = generarAccessToken(registro.usuario);
  const nuevoRefreshToken = await generarYGuardarRefreshToken(registro.usuario.id);

  return { accessToken: nuevoAccessToken, refreshToken: nuevoRefreshToken };
};

export const logout = async (refreshTokenCrudo) => {
  if (!refreshTokenCrudo) return;

  const tokenHash = hashToken(refreshTokenCrudo);

  await prisma.refreshToken.updateMany({
    where: { token: tokenHash },
    data: { revocado: true },
  });
};