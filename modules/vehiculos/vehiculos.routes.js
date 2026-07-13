import { Router } from "express";
import {
  getVehiculos,
  getVehiculoPorId,
  postVehiculo,
  putVehiculo,
  patchDesactivarVehiculo,
} from "./vehiculos.controller.js";
import { validarCrearVehiculo, validarActualizarVehiculo } from "./vehiculos.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";
import { autorizar } from "../../middlewares/autorizar.js";

const router = Router();

router.get("/", autenticar, getVehiculos);
router.get("/:id", autenticar, getVehiculoPorId);
router.post("/", autenticar, autorizar("administrador"), validarCrearVehiculo, validar, postVehiculo);
router.put("/:id", autenticar, autorizar("administrador"), validarActualizarVehiculo, validar, putVehiculo);
router.patch("/:id/desactivar", autenticar, autorizar("administrador"), patchDesactivarVehiculo);

export default router;