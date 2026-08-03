import express from "express";
import newsController from "../controllers/newsControllers.js";

const router = express.Router();

router.get("/", newsController.homepage);
router.get("/page", newsController.pageNews);
router.get("/search", newsController.searchNews);
router.get("/magang/:id_user", newsController.internNews);
router.get("/:id_news", newsController.detailNews);

export default router;