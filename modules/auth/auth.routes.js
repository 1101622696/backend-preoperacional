import { Router } from "express";
import { postLogin, postRefresh, postLogout } from "./auth.controller.js";
import { validarLogin, validarRefresh } from "./auth.validation.js";
import { validar } from "../../middlewares/validar.js";
import { loginLimiter } from "../../middlewares/rateLimiters.js";

const router = Router();

router.post("/login", loginLimiter, validarLogin, validar, postLogin);
router.post("/refresh", validarRefresh, validar, postRefresh);
router.post("/logout", postLogout);

export default router;