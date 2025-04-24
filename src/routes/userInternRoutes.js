const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Controllers
const usersController = require("../controllers/usersControllers");
const userInternController = require("../controllers/userInternControllers");

// Role
const requireRole = "intern";

// Page : Intern - Dashboard
router.get(
  "/dashboard",
  verifyToken,
  checkRole(requireRole),
  userInternController.dashboardIntern
);

// Page : Intern - Menulis Berita
router.post("/write-news", verifyToken, userInternController.writeNews);
router.put(
  "/write-news/:id_news",
  verifyToken,
  checkRole(requireRole),
  userInternController.updateNews
);
router.delete(
  "/write-news/:id_news",
  verifyToken,
  checkRole(requireRole),
  userInternController.deleteNews
);

// Page : User - Edit User
router.put(
  "/edit-account",
  verifyToken,
  checkRole(requireRole),
  usersController.updateUser
);

module.exports = router;
