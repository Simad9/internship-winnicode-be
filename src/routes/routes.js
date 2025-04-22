const express = require("express");
const router = express.Router();

// Middlewares
const verifyToken = require("../middlewares/verifyToken");

// Controllers
const newsController = require("../controllers/newsControllers");
const authController = require("../controllers/authControllers");
const usersController = require("../controllers/usersControllers");
const userPublikController = require("../controllers/userPublicControllers");
const userInternController = require("../controllers/userInternControllers");
const userAdminController = require("../controllers/userAdminControllers");

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
  "/public/dashboard/like/:id_like",
  verifyToken,
  userPublikController.deleteLikeNews
);
router.delete(
  "/public/dashboard/save/:id_save",
  verifyToken,
  userPublikController.deleteSaveNews
);
// Page : User - Dashboard
router.get("/public/like", verifyToken, userPublikController.likeNews);
router.delete(
  "/public/like/:id_like",
  verifyToken,
  userPublikController.deleteLikeNews
);
// Page : User - Dashboard
router.get("/public/save", verifyToken, userPublikController.saveNews);
router.delete(
  "/public/save/:id_save",
  verifyToken,
  userPublikController.deleteSaveNews
);
// Page : Edit User
router.put("/public/edit-account", verifyToken, usersController.updateUser);

// Halaman User Magang
// Page : Intern - Dashboard
router.get(
  "/intern/dashboard",
  verifyToken,
  userInternController.dashboardIntern
);
// Page : Intern - Menulis Berita
router.post("/intern/write-news", verifyToken, userInternController.writeNews);
router.put(
  "/intern/write-news/:id_news",
  verifyToken,
  userInternController.updateNews
);
router.delete(
  "/intern/write-news/:id_news",
  verifyToken,
  userInternController.deleteNews
);
// Page : User - Edit User
router.put("/intern/edit-account", verifyToken, usersController.updateUser);

// Halaman User Admin
// Page : Admin - Dashboard
router.get("/admin/dashboard", verifyToken, userAdminController.dashboardAdmin);
router.put(
  "/admin/dashboard/approve-category/:id_category",
  verifyToken,
  userAdminController.approveReqCategory
);
router.delete(
  "/admin/dashboard/delete-category/:id_category",
  verifyToken,
  userAdminController.deleteReqCategory
);
// Page : Admin - Pending News
router.get("/admin/pending-news", verifyToken, userAdminController.pendingNews);
// Page : Admin - Review News
router.get("/admin/review-news/:id_news", verifyToken, userAdminController.reviewNews);
router.put("/admin/review-news/:id_news", verifyToken, userAdminController.updateReviewNews);
// Page : Admin - Kontrol Akun
router.get("/admin/kontrol-account", verifyToken, userAdminController.controlAccount);
router.put("/admin/kontrol-account", verifyToken, userAdminController.updateControlAccount);
router.delete("/admin/kontrol-account", verifyToken, userAdminController.deleteControlAccount);
router.get("/admin/kontrol-account/intern", verifyToken, userAdminController.internsAccount);
router.put("/admin/kontrol-account/intern", verifyToken, userAdminController.updateInternsAccount);
router.delete("/admin/kontrol-account/intern", verifyToken, userAdminController.deleteInternsAccount);
router.get("/admin/kontrol-account/user", verifyToken, userAdminController.ussersAccount);
router.put("/admin/kontrol-account/user", verifyToken, userAdminController.updateUssersAccount);
router.delete("/admin/kontrol-account/user", verifyToken, userAdminController.deleteUssersAccount);
// Page : Admin - Edit User
router.put("/admin/edit-account", verifyToken, usersController.updateUser);

// Page : Bukan Page / Testing
router.get("/users", verifyToken, usersController.getUsers);
router.get("/token", authController.refreshToken);
router.delete("/logout", authController.logout);

module.exports = router;
