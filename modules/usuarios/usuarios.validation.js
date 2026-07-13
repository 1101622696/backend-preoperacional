import { body } from "express-validator";

export const validarCrearUsuario = [
  body("nombre").trim().notEmpty().withMessage("El nombre es obligatorio"),
  body("cedula").trim().isNumeric().withMessage("Cédula inválida"),
  body("email").isEmail().withMessage("Email inválido").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("rol").isIn(["conductor", "administrador"]).withMessage("Rol inválido"),
  body("origen").isIn(["manual", "rrhh_api"]).withMessage("Origen inválido"),
];

export const validarLogin = [
  body("email").isEmail().withMessage("Email inválido").normalizeEmail(),
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
];

export const validarActualizarUsuario = [
  body("nombre").trim().notEmpty().withMessage("El nombre es obligatorio"),
  body("email").isEmail().withMessage("Email inválido").normalizeEmail(),
  body("rol").isIn(["conductor", "administrador"]).withMessage("Rol inválido"),
];

export const validarCambiarPassword = [
  body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
];
