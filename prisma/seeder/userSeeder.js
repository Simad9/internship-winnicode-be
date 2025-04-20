const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// Salt Password
const salt = bcrypt.genSaltSync();

async function seedUser() {

  const users = [
    {
      name: "Jhon Doe",
      username: "jhondoe123",
      email: "johndoe@example.com",
      password: bcrypt.hashSync("jhondoe123", salt),
      role: "public",
      profile_picture: null,
      refresh_token: null,
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
      password: bcrypt.hashSync("User123", salt),
      role: "intern",
      profile_picture: "profile2.jpg",
      refresh_token: null,
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },
    {
      name: "Indra Permana",
      username: "Indra123",
      email: "Indra123h@example.com",
      password: bcrypt.hashSync("Indra123", salt),
      role: "intern",
      profile_picture: "profile1.jpg",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Alya Rahmadani",
      username: "Alya123",
      email: "Alya123h@example.com",
      password: bcrypt.hashSync("Alya123", salt),
      role: "intern",
      profile_picture: "profile1.jpg",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users seeded successfully.");
}

module.exports = { seedUser };

