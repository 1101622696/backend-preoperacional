import { Router } from "express";
import {
  postIniciarViaje, patchFinalizarViaje, postPuntosGps,
  getMisViajes, getViajePorId, getPuntosDeViaje,
} from "./viajes.controller.js";
import { validarIniciarViaje, validarFinalizarViaje, validarBatchPuntos } from "./viajes.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";

const router = Router();

router.get("/mias", autenticar, getMisViajes);

router.post("/", autenticar, validarIniciarViaje, validar, postIniciarViaje);
router.patch("/:id/finalizar", autenticar, validarFinalizarViaje, validar, patchFinalizarViaje);
router.post("/:id/puntos", autenticar, validarBatchPuntos, validar, postPuntosGps);

router.get("/:id", autenticar, getViajePorId);
router.get("/:id/puntos", autenticar, getPuntosDeViaje);

export default router;