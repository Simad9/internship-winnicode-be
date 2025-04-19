const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const threeNewNews = async () => {
  const news = await prisma.news.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 3,
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      category: {
        select: {
          category: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return news;
};
const mostLikedNews = async () => {
  const result = await prisma.like.groupBy({
    by: ["newsId"],
    _count: {
      newsId: true,
    },
    orderBy: {
      _count: {
        newsId: "desc",
      },
    },
  });

  const news = await prisma.news.findMany({
    where: {
      id_news: {
        in: result.map((item) => item.newsId),
      },
    },
    select: {
      id_news: true,
      title: true,
      image: true,
      created_at: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return news.map((item, index) => ({
    ...item,
    like_count: result[index]._count.newsId,
  }));
};

const homeNews = async () => {
  const news = await prisma.news.findMany({
    take: 9,
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return news;
};

const pageNews = async (page, pagesSize) => {
  const news = await prisma.news.findMany({
    skip: (page - 1) * pagesSize,
    take: pagesSize,
    orderBy: {
      created_at: "desc",
    },
  });
  return news;
};

const totalNews = async () => {
  const news = await prisma.news.count();
  return news;
};

module.exports = {
  threeNewNews,
  mostLikedNews,
  homeNews,
  pageNews,
  totalNews,
};
