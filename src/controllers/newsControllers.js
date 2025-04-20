const News = require("../models/newsModels");

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

module.exports = {
  threeNewNews,
  mostLikedNews,
  homeNews,
  pageNews,
};
