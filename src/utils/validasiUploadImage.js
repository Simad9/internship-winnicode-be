import fs from "fs";
import path from "path";
import uploadToCloudService from "./uplaodFiles.js";

const validasiUploadImage = async (fileInput, isImageNews, res) => {
  try {
    const tempPath = fileInput.path;
    const originalName = fileInput.originalname;

    const ext = path.extname(originalName).toLowerCase();
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
      fs.unlinkSync(tempPath);
      if (res) return res.status(400).json({ message: "Format tidak didukung" });
      throw new Error("Format tidak didukung");
    }
    if (fileInput.size > 5000000) {
      fs.unlinkSync(tempPath);
      if (res) return res.status(400).json({ message: "File harus di bawah 5MB" });
      throw new Error("File harus di bawah 5MB");
    }
    const cloudUrl = await uploadToCloudService(tempPath, isImageNews);
    fs.unlinkSync(tempPath);

    return cloudUrl;
  } catch (error) {
    if (res) {
      return res.status(500).json({
        message: "Terjadi Kesalahan",
        error: error.message,
      });
    }
    throw error;
  }
};

export default validasiUploadImage;
