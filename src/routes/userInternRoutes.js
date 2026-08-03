import express from "express";
import multer from "multer";
import verifyToken from "../middlewares/verifyToken.js";
import checkRole from "../middlewares/checkRole.js";
import usersController from "../controllers/usersControllers.js";
import userInternController from "../controllers/userInternControllers.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const requireRole = "intern";

router.get("/dashboard", verifyToken, checkRole(requireRole), userInternController.dashboardIntern);
router.post("/write-news", verifyToken, checkRole(requireRole), upload.single("image"), userInternController.writeNews);
router.put("/write-news/:id_news", verifyToken, checkRole(requireRole), upload.single("image"), userInternController.updateNews);
router.delete("/write-news/:id_news", verifyToken, checkRole(requireRole), userInternController.deleteNews);

router.put("/edit-account", verifyToken, checkRole(requireRole), upload.single("profile_picture"), usersController.updateUser);

export default router;
