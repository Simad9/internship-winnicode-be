import express from "express";
import userController from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/getUsername/:username", userController.getUserByUsername);
router.get("/getUserById/:id_user", userController.getUserById);

export default router;
