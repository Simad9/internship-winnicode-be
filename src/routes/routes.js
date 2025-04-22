const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Controllers
const newsController = require("../controllers/newsControllers");
const usersController = require("../controllers/usersControllers");
const authController = require("../controllers/authControllers");
const userPublikController = require("../controllers/userPublicControllers");

// Routes
// Page : Login
router.post("/users/login", authController.login);
// Page : Register
router.post("/users/register", authController.register);

// === Halaman Berita ===
// Page : Home Page Awal
router.get("/news", newsController.homepage);
// Page : Halaman Lainnya
router.get("/news/page", newsController.pageNews);
// Page : Cari Berita
router.get("/news/search", newsController.searchNews);
// Page : Berita Magang
router.get("/news/magang/:id_user", newsController.internNews);
// Page : Detail Berita
router.get("/news/:id_news", newsController.detailNews);

// === Halaman User Public ===
// Page : User - Dashboard
router.get(
  "/public/dashboard",
  verifyToken,
  userPublikController.dashboardPublic
);
router.delete(
  "/public/dashboard/like/:id",
  verifyToken,
  userPublikController.deleteLikeNews
);
router.delete(
  "/public/dashboard/save/:id",
  verifyToken,
  userPublikController.deleteSaveNews
);
// Page : User - Dashboard
router.get("/public/like", verifyToken, userPublikController.likeNews);
router.delete("/public/like/:id", verifyToken, userPublikController.deleteLikeNews);
// Page : User - Dashboard
router.get("/public/save", verifyToken, userPublikController.saveNews);
router.delete("/public/save/:id", verifyToken, userPublikController.deleteSaveNews);
// Page : User - Dashboard
router.put(
  "/public/updateUserPublic",
  verifyToken,
  userPublikController.updateUserPublic
);

// Page : Bukan Page / Testing
router.get("/users", verifyToken, usersController.getUsers);
router.get("/token", authController.refreshToken);
router.delete("/logout", authController.logout);

module.exports = router;
