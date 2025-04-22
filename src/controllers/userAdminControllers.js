const Admin = require("../models/userAdminModels");

const dashboardAdmin = async (req, res) => {
  try {
    const userId = req.userId;
    const [
      userData,
      pendingData,
      totalUser,
      totalIntern,
      allCategory,
      reqCategory,
    ] = await Promise.all([
      Admin.getUserAdmin(userId),
      Admin.getPendingData(),
      Admin.getTotalUser(),
      Admin.getTotalIntern(),
      Admin.getAllCategory(),
      Admin.getReqCategory(),
    ]);

    res.status(200).json({
      userId: userId,
      userData,
      pendingData,
      totalUser,
      totalIntern,
      allCategory,
      reqCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const approveReqCategory = async (req, res) => {
  try {
    const id_category = parseInt(req.params.id_category);
    const data = await Admin.approveReqCategory(id_category);
    res.status(200).json({
      message: "Berhasil menyetujui kategori",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteReqCategory = async (req, res) => {
  try {
    const id_category = parseInt(req.params.id_category);
    const data = await Admin.deleteReqCategory(id_category);
    res.status(200).json({
      message: "Berhasil menghapus kategori",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const pendingNews = async (req, res) => {
  try {
    const data = await Admin.getPendingData();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const reviewNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);
    const data = await Admin.getReviewNews(newsId);

    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateReviewNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);
    const { status, note } = req.body;

    // Kalo di approved admin tampilin di halaman news
    if (note == "approved") {
      await Admin.approveNews(newsId);
    }
    const data = await Admin.updateReviewNews(newsId, { status, note });

    res.status(200).json({
      message: "Berhasil update review berita pending",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Control Account
const controlAccount = async (req, res) => {
  try {
    const data = await Admin.getControlAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateControlAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const dataForm = req.body;
    const data = await Admin.updateControlAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteControlAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteControlAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const internsAccount = async (req, res) => {
  try {
    const data = await Admin.getInternsAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateInternsAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const dataForm = req.body;
    const data = await Admin.updateInternsAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteInternsAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteInternsAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const ussersAccount = async (req, res) => {
  try {
    const data = await Admin.getUssersAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateUssersAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const dataForm = req.body;
    const data = await Admin.updateInternsAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteUssersAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteInternsAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  dashboardAdmin,
  approveReqCategory,
  deleteReqCategory,
  pendingNews,
  reviewNews,
  updateReviewNews,
  // Control Account
  controlAccount,
  updateControlAccount,
  deleteControlAccount,
  internsAccount,
  updateInternsAccount,
  deleteInternsAccount,
  ussersAccount,
  updateUssersAccount,
  deleteUssersAccount,
};
