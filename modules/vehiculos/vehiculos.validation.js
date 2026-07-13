import { body } from "express-validator";

export const validarCrearVehiculo = [
  body("placa")
    .trim()
    .toUpperCase()
    .notEmpty()
    .withMessage("La placa es obligatoria")
    .isLength({ min: 5, max: 8 })
    .withMessage("Placa inválida"),
  body("marca").optional().trim(),
  body("modelo").optional().trim(),
  body("tieneGpsFisico").optional().isBoolean().withMessage("tieneGpsFisico debe ser booleano"),
  body("polizaUrl").optional().isURL().withMessage("URL de póliza inválida"),
  body("soatUrl").optional().isURL().withMessage("URL de SOAT inválida"),
  body("tecnomecanicaUrl").optional().isURL().withMessage("URL de tecnomecánica inválida"),
];

export const validarActualizarVehiculo = [
  body("marca").optional().trim(),
  body("modelo").optional().trim(),
  body("tieneGpsFisico").optional().isBoolean().withMessage("tieneGpsFisico debe ser booleano"),
  body("polizaUrl").optional().isURL().withMessage("URL de póliza inválida"),
  body("soatUrl").optional().isURL().withMessage("URL de SOAT inválida"),
  body("tecnomecanicaUrl").optional().isURL().withMessage("URL de tecnomecánica inválida"),
];