const prisma = require("./prismaClient");

const beritaModel = {
  getAll: async () => {
    return await prisma.berita.findMany();
  },
  getById: async (id) => {
    return await prisma.berita.findUnique({
      where: {
        id_berita: id,
      },
    });
  },
  create: async (data) => {
    return await prisma.berita.create({
      data: data,
    });
  },
};

module.exports = beritaModel;
