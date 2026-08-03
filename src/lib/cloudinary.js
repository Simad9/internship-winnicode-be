import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLAUD_NAME_CLOUDINARY || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINARY || process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.API_SECRET_CLOUDINARY || process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
