import { prisma } from "../lib/prisma.js";

export const register = async (data) => {
  const result = await prisma.user.create({ data });
  return result;
};

export const usernameOrEmailExists = async (username, email) => {
  const result = await prisma.user.findFirst({
    where: {
      OR: [{ username: username }, { email: email }],
    },
  });
  return result;
};

export const updateById = async (id, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: id,
    },
    data: data,
  });
  return result;
};

export const byRefreshToken = async (refreshToken) => {
  const result = await prisma.user.findFirst({
    where: {
      refresh_token: refreshToken,
    },
  });
  return result;
};

export default {
  register,
  usernameOrEmailExists,
  updateById,
  byRefreshToken,
};
