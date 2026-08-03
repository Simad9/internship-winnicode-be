import { prisma } from "../../src/lib/prisma.js";

async function seedTask() {
  const tasks = [
    {
      task_title: "Pembuatan Berita Tema Teknologi",
      task_deadline: new Date("2025-03-30T00:00:00.000Z"),
    },
    {
      task_title: "Pembuatan Cerita Bermakana",
      task_deadline: new Date("2025-03-30T00:00:00.000Z"),
    },
  ];

  for (const item of tasks) {
    const exists = await prisma.task.findFirst({
      where: { task_title: item.task_title },
    });
    if (!exists) {
      await prisma.task.create({ data: item });
    }
  }

  console.log("Tasks seeded (existing skipped).");
}

export { seedTask };