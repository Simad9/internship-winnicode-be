import express from "express";
import newsRoute from "./newsRoutes.js";
import authRoute from "./authRoutes.js";
import userPublicRoutes from "./userPublicRoutes.js";
import userInternRoutes from "./userInternRoutes.js";
import userAdminRoutes from "./userAdminRoutes.js";
import tambahanRoute from "./tambahanRoutes.js";

const router = express.Router();

// === Halaman Auth ===
router.use("/", authRoute);

// === Halaman Berita ===
router.use("/news", newsRoute);

// === Halaman User Public ===
router.use("/public", userPublicRoutes);

// Halaman User Magang
router.use("/intern", userInternRoutes);

// Halaman User Admin
router.use("/admin", userAdminRoutes);

// Tambahan
router.use("", tambahanRoute);

export default router;
