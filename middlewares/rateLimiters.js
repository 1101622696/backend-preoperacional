import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ventana de 15 minutos
  max: 5, // máximo 5 intentos por IP en esa ventana
  message: { error: "Demasiados intentos de inicio de sesión. Intenta de nuevo en 15 minutos." },
  standardHeaders: true, // devuelve info de límite en headers RateLimit-*
  legacyHeaders: false,
  skipSuccessfulRequests: true, // los logins EXITOSOS no cuentan para el límite, solo los fallidos
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300, // 300 peticiones por IP cada 15 min, ajusta según tu tráfico esperado
  message: { error: "Demasiadas peticiones, intenta más tarde." },
  standardHeaders: true,
  legacyHeaders: false,
});