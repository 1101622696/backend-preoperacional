import { body } from "express-validator";

export const validarCrearSolicitud = [
  body("motivo").trim().notEmpty().withMessage("El motivo es obligatorio"),
  body("destino").trim().notEmpty().withMessage("El destino es obligatorio"),
  body("fechaRequerida").isISO8601().withMessage("fechaRequerida debe ser una fecha válida"),
];

export const validarAprobarSolicitud = [
  body("vehiculoAsignadoId").isInt({ min: 1 }).withMessage("vehiculoAsignadoId es obligatorio"),
];

export const validarRechazarSolicitud = [
  body("motivoRechazo").optional().trim(),
];