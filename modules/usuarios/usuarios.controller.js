import { listarUsuariosActivos, obtenerUsuarioPorId, crearUsuario, actualizarUsuario, cambiarPassword, desactivarUsuario } from "./usuarios.service.js";

export const getUsuarios = async (req, res) => {
  if (req.usuario.rol === "administrador") {
    return res.json(await listarUsuarios());
  }
  // conductor: solo se ve a sí mismo
  const propio = await obtenerUsuarioPorId(req.usuario.id);
  res.json([propio]); // array para que el frontend no tenga que manejar dos formatos distintos
};

export const getUsuarioPorId = async (req, res) => {
  const id = Number(req.params.id);
  const usuario = await obtenerUsuarioPorId(id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  res.json(usuario);
};

export const postUsuario = async (req, res) => {
  const { nombre, cedula, email, password, rol, origen } = req.body;

  // Validación mínima de presencia
  if (!nombre || !cedula || !email || !password || !rol || !origen) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const usuario = await crearUsuario({ nombre, cedula, email, password, rol, origen });
    res.status(201).json(usuario);
  } catch (error) {
    // Prisma lanza P2002 cuando se viola un constraint @unique (cedula o email duplicados)
    if (error.code === "P2002") {
      return res.status(409).json({
        error: `Ya existe un usuario con ese ${error.meta?.target?.join(", ")}`,
      });
    }
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const putUsuario = async (req, res) => {
  const id = Number(req.params.id);
  const { nombre, email, rol } = req.body;

  try {
    const usuario = await actualizarUsuario(id, { nombre, email, rol });
    res.json(usuario);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Email ya está en uso" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

export const patchPassword = async (req, res) => {
  const id = Number(req.params.id);
  const { password } = req.body;

  try {
    await cambiarPassword(id, password);
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al cambiar contraseña" });
  }
};

export const patchDesactivar = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const usuario = await desactivarUsuario(id);
    res.json(usuario);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    console.error(error);
    res.status(500).json({ error: "Error al desactivar usuario" });
  }
};

export const postTokenFcm = async (req, res) => {
  try {
    await registrarTokenFcm(req.usuario.id, req.body.fcmToken);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar token" });
  }
};


export const getPerfilPropio = async (req, res) => {
  const usuario = await obtenerUsuarioPorId(req.usuario.id);
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  const { passwordHash, ...datosSeguros } = usuario;
  res.json(datosSeguros);
};