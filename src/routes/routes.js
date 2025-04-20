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
router.get("/news-three-news", newsController.threeNewNews);
router.get("/news-most-liked", newsController.mostLikedNews);
router.get("/news-nine-news", newsController.homeNews);
router.get("/news", newsController.homepage);

// Page : Halaman Lainnya
router.get("/news?page=:page", newsController.pageNews);

// Page : Detail Berita
router.get("/news/:id_news", newsController.getNewsById);
router.get("/news/:id_news/comments", newsController.getNewsComments);

module.exports = router;
