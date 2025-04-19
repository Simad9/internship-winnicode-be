const express = require("express");
const router = express.Router();

// Controllers
const newsController = require("../controllers/newsControllers");

// Routes
// Page : Home Page Awal
router.get("/news-three-news", newsController.threeNewNews);
router.get("/news-most-liked", newsController.mostLikedNews);
router.get("/news", newsController.homeNews);

// Page : Halaman Lainnya
router.get("/news?page=:page", newsController.pageNews);

module.exports = router;
