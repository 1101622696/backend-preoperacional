import { body } from "express-validator";

export const validarIniciarViaje = [
  body("id").isUUID().withMessage("id debe ser un UUID válido"),
  body("vehiculoId").isInt({ min: 1 }).withMessage("vehiculoId es obligatorio"),
  body("horaInicio").isISO8601().withMessage("horaInicio inválida"),
  body("preoperacionalId").optional().isInt({ min: 1 }),
];

export const validarFinalizarViaje = [
  body("horaFin").isISO8601().withMessage("horaFin inválida"),
  body("distanciaTotalKm").isFloat({ min: 0 }).withMessage("distanciaTotalKm inválida"),
  body("velocidadPromedio").isFloat({ min: 0 }).withMessage("velocidadPromedio inválida"),
  body("velocidadMaxima").isFloat({ min: 0 }).withMessage("velocidadMaxima inválida"),
];

export const validarBatchPuntos = [
  body("puntos").isArray({ min: 1 }).withMessage("puntos debe ser un array con al menos 1 elemento"),
  body("puntos.*.lat").isFloat({ min: -90, max: 90 }).withMessage("lat inválida"),
  body("puntos.*.lng").isFloat({ min: -180, max: 180 }).withMessage("lng inválida"),
  body("puntos.*.timestamp").isISO8601().withMessage("timestamp inválido"),
  body("puntos.*.velocidad").optional().isFloat({ min: 0 }),
  body("puntos.*.precision").optional().isFloat({ min: 0 }),
];