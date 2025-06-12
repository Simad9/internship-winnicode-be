const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../controllers/usersControllers");

// Page : Tambahan
router.get("/getUsername/:username", userController.getUserByUsername);

module.exports = router;
