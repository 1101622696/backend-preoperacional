import { Router } from "express";
import {
  getSolicitudPendiente,
  postPreoperacional,
  getPreoperacionales,
  getMisPreoperacionales,
  getPreoperacionalPorId,
} from "./preoperacionales.controller.js";
import { validarCrearPreoperacional } from "./preoperacionales.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";
import { autorizar } from "../../middlewares/autorizar.js";

const router = Router();

router.get("/solicitud-pendiente", autenticar, getSolicitudPendiente);
router.get("/mias", autenticar, getMisPreoperacionales);

router.post("/", autenticar, validarCrearPreoperacional, validar, postPreoperacional);
router.get("/", autenticar, autorizar("administrador"), getPreoperacionales);
router.get("/:id", autenticar, getPreoperacionalPorId);

export default router;