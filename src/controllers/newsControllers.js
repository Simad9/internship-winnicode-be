const News = require("../models/newsModels");

// HomePage - 3 berita terbaru
const threeNewNews = async (req, res) => {
  try {
    const data = await News.threeNewNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// HomePage - 6 Berita paling disukai
const mostLikedNews = async (req, res) => {
  try {
    const data = await News.mostLikedNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// HomePage - 9 Berita
const homeNews = async (req, res) => {
  try {
    const data = await News.homeNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Home Page - Gabungan
const homepage = async (req, res) => {
  try {
    // Menjalankan 3 query secara paralel
    const [newNews, likedNews, homeNewsData] = await Promise.all([
      News.threeNewNews(),
      News.mostLikedNews(),
      News.homeNews(),
    ]);

    // Mengembalikan semua data dalam satu response
    res.json({
      newNews,
      likedNews,
      homeNews: homeNewsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Berita Lainnya - 12 Berita, 1 halaman
const pageNews = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 12;

  try {
    const data = News.pageNews(page, pageSize);
    const totalNews = News.totalNews;
    const totalPages = Math.ceil(totalNews / pageSize);

    res.status(200).json({
      data: data,
      pagination: {
        currentPage: page,
        totalPages,
        totalNews,
        pageSize,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Detail Berita - Ambil Detail Berita
const getNewsById = async (req, res) => {
  const { newsId } = req.params;
  try {
    const data = await News.getNewsDetailById(newsId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Detail berita - hitung like pada berita
// TODO

// Detail berita - hitung komentar pada berita
// TODO

// Detail Berita - Ambil Komentar
const getNewsComments = async (req, res) => {
  const { newsId } = req.params;
  try {
    const data = await News.getNewsComments(newsId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Detail berita = menambahkan komentar (butuh login)
// TODO

// Anak Magang menulis = Berita yang ditulis dia
// TODO

// Anak Magang menulis = Detail Penulis berita
// TODO

// Mencari Berita = Berita dicari berdasarkan keyword
// TODO

module.exports = {
  threeNewNews,
  mostLikedNews,
  homeNews,
  pageNews,
  getNewsById,
  // asda
  getNewsComments,
  // gabungan
  homepage,
};
