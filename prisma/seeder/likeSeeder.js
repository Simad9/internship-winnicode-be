import { prisma } from "../../src/lib/prisma.js";

const seedLike = async () => {
  const likes = [
    // newsId: 1 --> 6 likes
    { newsId: 1, userId: 1, like: true, timestamp: new Date() },
    { newsId: 1, userId: 2, like: true, timestamp: new Date() },
    { newsId: 1, userId: 3, like: true, timestamp: new Date() },
    { newsId: 1, userId: 4, like: true, timestamp: new Date() },
    { newsId: 1, userId: 5, like: true, timestamp: new Date() },
    { newsId: 1, userId: 6, like: true, timestamp: new Date() },

    // newsId: 2 --> 5 likes
    { newsId: 2, userId: 1, like: true, timestamp: new Date() },
    { newsId: 2, userId: 2, like: true, timestamp: new Date() },
    { newsId: 2, userId: 3, like: true, timestamp: new Date() },
    { newsId: 2, userId: 4, like: true, timestamp: new Date() },
    { newsId: 2, userId: 5, like: true, timestamp: new Date() },

    // newsId: 3 --> 4 likes
    { newsId: 3, userId: 1, like: true, timestamp: new Date() },
    { newsId: 3, userId: 2, like: true, timestamp: new Date() },
    { newsId: 3, userId: 6, like: true, timestamp: new Date() },
    { newsId: 3, userId: 7, like: true, timestamp: new Date() },

    // newsId: 4 --> 3 likes
    { newsId: 4, userId: 3, like: true, timestamp: new Date() },
    { newsId: 4, userId: 5, like: true, timestamp: new Date() },
    { newsId: 4, userId: 8, like: true, timestamp: new Date() },

    // newsId: 5 --> 2 likes
    { newsId: 5, userId: 4, like: true, timestamp: new Date() },
    { newsId: 5, userId: 6, like: true, timestamp: new Date() },

    // newsId: 6 --> 1 like
    { newsId: 6, userId: 7, like: true, timestamp: new Date() },
  ];

  for (const like of likes) {
    const exists = await prisma.like.findFirst({
      where: { newsId: like.newsId, userId: like.userId },
    });
    if (!exists) {
      await prisma.like.create({
        data: like,
      });
    }
  }

  console.log("Likes seeded (existing skipped).");
};

export { seedLike };
