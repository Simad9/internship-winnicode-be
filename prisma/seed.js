// prisma/seed.ts
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Menambahkan user dummy
  await prisma.user.create({
    data: {
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      password: "hashedpassword", // Pastikan password di-hash
      profile_picture: "profilepic.jpg",
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
