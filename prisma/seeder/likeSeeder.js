const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedLike = async () => {
  const likes = [
    {
      newsId: 1,
      userId: 1,
      like: true,
      timestamp: new Date(),
    },
    {
      newsId: 1,
      userId: 2,      
      like: true,
      timestamp: new Date(),
    },
    {
      newsId: 1,
      userId: 3,      
      like: true,
      timestamp: new Date(),
    },
    {
      newsId: 2,
      userId: 2,      
      like: true,
      timestamp: new Date(),
    },
  ];

  for (const like of likes) {
    await prisma.like.create({
      data: like,
    });
  }

  console.log("Likes seeded successfully.");
};

module.exports = { seedLike };