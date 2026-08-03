import express from "express";
import authController from "../controllers/authControllers.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/token", authController.refreshToken);
router.delete("/logout", authController.logout);

export default router;
