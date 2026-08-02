import { Router } from "express";
import {
  getVehiculos,
  getVehiculoPorId,
  postVehiculo,
  putVehiculo,
  patchDesactivarVehiculo,
  postCargaMasiva
} from "./vehiculos.controller.js";
import { validarCrearVehiculo, validarActualizarVehiculo } from "./vehiculos.validation.js";
import { validar } from "../../middlewares/validar.js";
import { autenticar } from "../../middlewares/autenticar.js";
import { autorizar } from "../../middlewares/autorizar.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = Router();

router.get("/", autenticar, getVehiculos);
router.get("/:id", autenticar, getVehiculoPorId);
router.post("/", autenticar, autorizar("administrador"), validarCrearVehiculo, validar, postVehiculo);
router.put("/:id", autenticar, autorizar("administrador"), validarActualizarVehiculo, validar, putVehiculo);
router.patch("/:id/desactivar", autenticar, autorizar("administrador"), patchDesactivarVehiculo);
router.post("/carga-masiva", autenticar, autorizar("administrador"), upload.single("archivo"), postCargaMasiva);

export default router;