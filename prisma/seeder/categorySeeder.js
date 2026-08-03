import { prisma } from "../../src/lib/prisma.js";

async function seedCategory() {
  const categories = [
    { category: "Pendidikan", status: "accepted" },
    { category: "Lingkungan", status: "accepted" },
    { category: "Ekonomi", status: "accepted" },
    { category: "Politik", status: "accepted" },
    { category: "Budaya", status: "accepted" },
    { category: "Teknologi", status: "accepted" },
    { category: "Kesehatan", status: "decline" },
  ];

  for (const item of categories) {
    const exists = await prisma.category.findFirst({
      where: { category: item.category },
    });
    if (!exists) {
      await prisma.category.create({ data: item });
    }
  }

  console.log("Categories seeded (existing skipped).");
}

export { seedCategory };
