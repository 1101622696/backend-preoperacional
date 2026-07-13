import { body } from "express-validator";

export const validarCrearPreoperacional = [
  body("vehiculoId").isInt({ min: 1 }).withMessage("vehiculoId es obligatorio"),
  body("respuestas")
    .notEmpty().withMessage("respuestas es obligatorio")
    .custom((v) => typeof v === "object").withMessage("respuestas debe ser un objeto/array JSON"),
  body("firmaUrl").optional().isURL().withMessage("firmaUrl inválida"),
  body("observaciones").optional().trim(),
  body("solicitudId").optional().isInt({ min: 1 }).withMessage("solicitudId debe ser numérico"),
];