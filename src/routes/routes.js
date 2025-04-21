const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Controllers
const newsController = require("../controllers/newsControllers");
const usersController = require("../controllers/usersControllers");
const authController = require("../controllers/authControllers");

// Routes
// Page : Bukan Page / Testing
router.get("/users", verifyToken, usersController.getUsers);
router.get("/token", authController.refreshToken);
router.delete("/logout", authController.logout);

// Page : Login
router.post("/users/login", authController.login);

// Page : Register
router.post("/users/register", authController.register);

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

module.exports = router;
