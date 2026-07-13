import { body } from "express-validator";

export const validarLogin = [
  body("email").isEmail().withMessage("Email inválido").normalizeEmail(),
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
];

export const validarRefresh = [
  body("refreshToken").notEmpty().withMessage("refreshToken es obligatorio"),
];