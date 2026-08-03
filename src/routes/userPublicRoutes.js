import express from "express";
import multer from "multer";
import verifyToken from "../middlewares/verifyToken.js";
import checkRole from "../middlewares/checkRole.js";
import usersController from "../controllers/usersControllers.js";
import userPublikController from "../controllers/userPublicControllers.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const requireRole = "public";

router.get("/dashboard", verifyToken, checkRole(requireRole), userPublikController.dashboardPublic);
router.delete("/dashboard/like/:id_like", verifyToken, checkRole(requireRole), userPublikController.deleteLikeNews);
router.delete("/dashboard/save/:id_save", verifyToken, checkRole(requireRole), userPublikController.deleteSaveNews);

router.get("/like", verifyToken, checkRole(requireRole), userPublikController.likeNews);
router.delete("/like/:id_like", verifyToken, checkRole(requireRole), userPublikController.deleteLikeNews);

router.get("/save", verifyToken, checkRole(requireRole), userPublikController.saveNews);
router.delete("/save/:id_save", verifyToken, checkRole(requireRole), userPublikController.deleteSaveNews);

router.put("/edit-account", verifyToken, checkRole(requireRole), upload.single("profile_picture"), usersController.updateUser);

export default router;
