const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../controllers/usersControllers");

// Page : Tambahan
router.get("/getUsername/:username", userController.getUserByUsername);
router.get("/getUserById/:id_user", userController.getUserById);

module.exports = router;
