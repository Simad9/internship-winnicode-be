const Public = require("../models/userPublicModels");
const bcrypt = require("bcrypt");

// Halaman Dashboard
const dashboardPublic = async (req, res) => {
  const id_user = req.userId;
  try {
    const [userData, countLike, countSave, likeNews, saveNews] =
      await Promise.all([
        Public.getUserPublic(id_user),
        Public.countLikeNews(id_user),
        Public.countSaveNews(id_user),
        Public.getLikeNews(id_user),
        Public.getSaveNews(id_user),
      ]);

    res.status(200).json({
      userData,
      countLike,
      countSave,
      likeNews,
      saveNews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const likeNews = async (req, res) => {
  const id_user = req.userId;
  try {
    const data = await Public.getLikeNews(id_user);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteLikeNews = async (req, res) => {
  try {
    const likeId = parseInt(req.params.id);
    const data = await Public.deleteLikeNews(likeId);

    res.status(200).json({
      message: "Berhasil menghapus berita yang disukai",
      data_dihapus: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const saveNews = async (req, res) => {
  const id_user = req.userId;
  try {
    const data = await Public.getSaveNews(id_user);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteSaveNews = async (req, res) => {
  try {
    const saveId = parseInt(req.params.id);
    const data = await Public.deleteSaveNews(saveId);

    res.status(200).json({
      message: "Berhasil menghapus berita yang disimpan",
      data_dihapus: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateUserPublic = async (req, res) => {
  try {
    const { name, username, email, password_lama, password_baru } = req.body;
    const userId = req.userId;

    const user = await Public.getUserPublic(userId);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    const isPasswordValid = await bcrypt.compare(password_lama, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password Lama tidak cocok" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password_baru, salt);

    const dataUpdate = {
      name,
      username,
      email,
      password: hashPassword,
    };

    const data = await Public.updateUserPublic(userId, dataUpdate);

    res.status(200).json({
      message: "Data berhasil diperbarui",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  dashboardPublic,
  likeNews,
  saveNews,
  updateUserPublic,
  deleteLikeNews,
  deleteSaveNews,
};
