import { login, refrescarSesion, logout } from "./auth.service.js";

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const resultado = await login(email, password);
    res.json(resultado);
  } catch (error) {
    const status = error.status || 500;
    res.status(status).json({ error: error.message || "Error en el login" });
  }
};

export const postRefresh = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const resultado = await refrescarSesion(refreshToken);
    res.json(resultado);
  } catch (error) {
    const status = error.status || 500;
    res.status(status).json({ error: error.message || "Error al refrescar sesión" });
  }
};

export const postLogout = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    await logout(refreshToken);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al cerrar sesión" });
  }
};