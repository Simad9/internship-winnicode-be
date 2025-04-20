const Users = require("../models/usersModels");

const getUsers = async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};


module.exports = {
  getUsers,
};
