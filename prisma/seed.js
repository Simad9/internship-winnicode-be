import { prisma } from "../src/lib/prisma.js";

// seeder
import { seedCategory } from "./seeder/categorySeeder.js";
import { seedUser } from "./seeder/userSeeder.js";
import { seedTask } from "./seeder/taskSeeder.js";
import { seedNews } from "./seeder/newsSeeder.js";
import { seedLike } from "./seeder/likeSeeder.js";
import { commentSeeder } from "./seeder/commentSeeder.js";

async function main() {
  console.log("Starting idempotent seed process...");

  await seedCategory();
  await seedTask();
  await seedUser();
  await seedNews();
  await seedLike();
  await commentSeeder();

  console.log("All seeders processed (existing data skipped) 🌱");
}

main()
  .catch((e) => {
    console.error("Error running seeder:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
