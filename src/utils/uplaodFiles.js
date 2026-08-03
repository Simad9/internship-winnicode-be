import cloudinary from "../lib/cloudinary.js";

const uploadToCloudServiceProfilePicture = async (filePath, isImageNews) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "magang-portal-berita",
    });

    const optimizeUrl = cloudinary.url(result.public_id, {
      fetch_format: "auto",
      quality: "auto",
      crop: "fill",
      gravity: "auto",
      width: isImageNews === "news" ? 1000 : 500,
      height: isImageNews === "news" ? 600 : 500,
    });
    return optimizeUrl;
  } catch (error) {
    throw new Error("Gagal upload ke Cloudinary: " + error.message);
  }
};

export default uploadToCloudServiceProfilePicture;
