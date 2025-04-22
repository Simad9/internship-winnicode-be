const User = require("../models/usersModels");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
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

const updateUser = async (req, res) => {
  try {
    const { name, username, email, password_lama, password_baru } = req.body;
    const userId = req.userId;

    const user = await User.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    const isPasswordValid = await bcrypt.compare(password_lama, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password Lama tidak cocok" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password_baru, salt);

    const dataUpdate = {
      name,
      username,
      email,
      password: hashPassword,
    };

    const data = await User.updateUser(userId, dataUpdate);

    res.status(200).json({
      message: "Data berhasil diperbarui",
      data,
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
  updateUser,
};
