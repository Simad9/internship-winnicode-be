const beritaModel = require("../models/beritaModel");

async function getAllBerita(req, res) {
  try {
    const berita = await beritaModel.getAll();
    res.status(200).json({
      success: true,
      message: "Berita berhasil diambil",
      data: berita,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjasi kesalahan server",
      error: error.message,
    });
  }
}

module.exports = {
  getAllBerita,
};
