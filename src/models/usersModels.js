import { prisma } from "../lib/prisma.js";

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserById = async (userId) => {
  const result = await prisma.user.findFirst({
    where: {
      id_user: userId,
    },
    select: {
      id_user: true,
      name: true,
      username: true,
      email: true,
      password: true,
      role: true,
      profile_picture: true,
      major: true,
      university: true,
      internship_date: true,
    },
  });
  return result;
};

export const updateUser = async (userId, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: userId,
    },
    data: data,
  });
  return result;
};

export const getUserByUsername = async (username) => {
  const result = await prisma.user.findFirst({
    where: {
      OR: [{ username: username }, { name: username }],
    },
  });
  return result;
};
