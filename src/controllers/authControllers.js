import Auth from "../models/authModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const bycrypt = bcrypt;

const register = async (req, res) => {
  const { name, username, email, password, confirm_password } = req.body;

  // Password Validation
  if (password != confirm_password)
    return res.status(400).json({ message: "Password tidak cocok" });

  // Hash Passowrd
  const salt = await bycrypt.genSalt();
  const hashPassword = await bycrypt.hash(password, salt);

  try {
    const data = await Auth.register({
      name,
      username,
      email,
      password: hashPassword,
      profile_picture:
        "https://sumbatengahkab.go.id/wp-content/uploads/2016/08/dummy-prod-1.jpg",
    });

    res.status(200).json({
      message: "Register Berhasil",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Cari user berdasarkan username atau email
    const data = await Auth.usernameOrEmailExists(username, email);

    // Jika tidak ditemukan
    if (!data) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    // Password Validation
    const match = await bycrypt.compare(password, data.password);
    if (!match) return res.status(400).json({ message: "Password Salah" });

    // JWT Sign
    const accessToken = jwt.sign(
      { userId: data.id_user, username: username, role: data.role },
      process.env.ACCESS_TOKEN_SECRET || process.env.JWT_SECRET,
      // { expiresIn: "20s" },
      { expiresIn: "1d" },
    );
    const refreshToken = jwt.sign(
      { userId: data.id_user, username: username, role: data.role },
      process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    // Update Refresh Token + Cookie
    await Auth.updateById(data.id_user, { refresh_token: refreshToken });

    // Set Cookie
    res.cookie("refreshCookie", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Response
    return res.json({
      message: "Login Berhasil",
      accessToken,
      data: {
        id_user: data.id_user,
        name: data.name,
        photo: data.profile_picture,
        role: data.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    // Cookie Validation
    const refreshToken = req.cookies.refreshCookie;
    if (!refreshToken) return res.sendStatus(401);

    // User Validation
    const user = await Auth.byRefreshToken(refreshToken);
    if (!user) return res.status(403);

    // Verify JWT
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(403);

        const { id_user: userId, username, role } = user;
        const accessToken = jwt.sign(
          { userId, username, role },
          process.env.ACCESS_TOKEN_SECRET || process.env.JWT_SECRET,
          { expiresIn: "20s" },
        );

        res.json({ accessToken });
      },
    );
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshCookie;
    if (!refreshToken) return res.sendStatus(204);

    // User Validation
    const data = await Auth.byRefreshToken(refreshToken);
    if (!data) return res.status(204).json("User Tidak Ditemukan");

    // Mengupdate refresh token menjadi null
    await Auth.updateById(data.id_user, { refresh_token: null });

    // Menghapus refresh cookie
    res.clearCookie("refreshCookie");

    // Response
    return res.status(200).json({
      message: "Logout Berhasil",
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

export { register, login, refreshToken, logout };
export default { register, login, refreshToken, logout };
