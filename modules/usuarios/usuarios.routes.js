import { Router } from "express";
import {getUsuarios, getUsuarioPorId, postUsuario, patchDesactivar, patchPassword, putUsuario} from "./usuarios.controller.js";
import { validarCrearUsuario, validarActualizarUsuario, validarCambiarPassword } from "./usuarios.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";
import { autorizar } from "../../middlewares/autorizar.js";

const router = Router();

router.get("/", autenticar, autorizar("administrador"), getUsuarios);
router.get("/:id", autenticar, autorizar("administrador"), getUsuarioPorId);
router.post("/", autenticar, autorizar("administrador"), validarCrearUsuario, validar, postUsuario);
router.put("/:id", autenticar, autorizar("administrador"), validarActualizarUsuario, validar, putUsuario);
router.patch("/:id/password", autenticar, autorizar("administrador"), validarCambiarPassword, validar, patchPassword);
router.patch("/:id/desactivar", autenticar, autorizar("administrador"), patchDesactivar);
export default router;