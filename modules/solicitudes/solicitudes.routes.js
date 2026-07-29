import { Router } from "express";
import {
  getSolicitudes, getMisSolicitudes, getSolicitudPorId,
  postSolicitud, patchAprobar, patchRechazar, patchCancelar,
} from "./solicitudes.controller.js";
import { validarCrearSolicitud, validarAprobarSolicitud } from "./solicitudes.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";
import { autorizar } from "../../middlewares/autorizar.js";

const router = Router();

router.get("/mias", autenticar, getMisSolicitudes);

router.post("/", autenticar, validarCrearSolicitud, validar, postSolicitud);
router.get("/", autenticar, autorizar("administrador"), getSolicitudes);
router.get("/:id", autenticar, getSolicitudPorId);

router.patch("/:id/aprobar", autenticar, autorizar("administrador"), validarAprobarSolicitud, validar, patchAprobar);
router.patch("/:id/rechazar", autenticar, autorizar("administrador"), patchRechazar);
router.patch("/:id/cancelar", autenticar, patchCancelar);

export default router;