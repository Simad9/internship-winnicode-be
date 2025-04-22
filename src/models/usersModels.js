const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

module.exports = {
  getUsers,
};
