const express = require("express");
const router = express.Router();
const beritaController = require("../controllers/beritaController");

router.get("/", beritaController.getAllBerita);

module.exports = router;
