import { prisma } from "../../src/lib/prisma.js";

const commentSeeder = async () => {
  const comments = [
    {
      newsId: 1,
      userId: 10,
      comment: "Keren beritanya, semangat terus ya temen seperjuanganku",
    },
    {
      newsId: 1,
      userId: 11,
      comment: "Semangat terus menulis beritanyaaaa....",
    },
    {
      newsId: 2,
      userId: 3,
      comment: "first comment",
    }, 
  ];
  for (const comment of comments) {
    const exists = await prisma.comment.findFirst({
      where: {
        newsId: comment.newsId,
        userId: comment.userId,
        comment: comment.comment,
      },
    });
    if (!exists) {
      await prisma.comment.create({
        data: comment,
      });
    }
  }

  console.log("Comments seeded (existing skipped).");
};

export { commentSeeder };
