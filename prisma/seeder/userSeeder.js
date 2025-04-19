const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedUser() {
  const users = [
    {
      name: "Jhon Doe",
      username: "jhondoe123",
      email: "johndoe@example.com",
      password: "123",
      role: "public",
      profile_picture: null,
      university: null,
      major: null,
      internship_date: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      name: "User",
      username: "User123",
      email: "User123@example.com",
      password: "User123",
      role: "intern",
      profile_picture: "profile2.jpg",
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },
    {
      name: "Indra Permana",
      username: "Indra123",
      email: "Indra123h@example.com",
      password: "indra123",
      role: "intern",
      profile_picture: "profile1.jpg",
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Alya Rahmadani",
      username: "Alya123",
      email: "Alya123h@example.com",
      password: "Alya123",
      role: "intern",
      profile_picture: "profile1.jpg",
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    }
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users seeded successfully.");
}

module.exports = { seedUser };