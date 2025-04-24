const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

// Controllers
const usersController = require("../controllers/usersControllers");
const userPublikController = require("../controllers/userPublicControllers");

// Role
const requireRole = "public";

// Page : User - Dashboard
router.get(
  "/dashboard",
  verifyToken,
  checkRole(requireRole),
  userPublikController.dashboardPublic
);
router.delete(
  "/dashboard/like/:id_like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteLikeNews
);
router.delete(
  "/dashboard/save/:id_save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteSaveNews
);

// Page : User - Dashboard
router.get(
  "/like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.likeNews
);
router.delete(
  "/like/:id_like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteLikeNews
);

// Page : User - Dashboard
router.get(
  "/save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.saveNews
);
router.delete(
  "/save/:id_save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteSaveNews
);

// Page : Edit User
router.put(
  "/edit-account",
  verifyToken,
  checkRole(requireRole),
  usersController.updateUser
);

module.exports = router;