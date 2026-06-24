const multer = require("multer");
const fs = require("fs");

let storage;

// Check if Cloudinary credentials are fully configured and not placeholder values
const isCloudinaryConfigured = 
  process.env.CLOUDINARY_CLOUD_NAME && 
  process.env.CLOUDINARY_CLOUD_NAME !== "your_cloud_name" &&
  process.env.CLOUDINARY_API_KEY && 
  process.env.CLOUDINARY_API_KEY !== "your_api_key" &&
  process.env.CLOUDINARY_API_SECRET && 
  process.env.CLOUDINARY_API_SECRET !== "your_api_secret";

if (isCloudinaryConfigured) {
  const { v2: cloudinary } = require("cloudinary");
  const { CloudinaryStorage } = require("multer-storage-cloudinary");

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "resumes",
      resource_type: "raw", // Required for PDF/docx uploads
      allowed_formats: ["pdf", "docx"],
    },
    filename: (req, file, cb) => {
      cb(
        null,
        Date.now() + "-" + file.originalname
      );
    },
  });
  console.log("Cloudinary configuration detected. Using Cloudinary for file storage.");
} else {
  const uploadDir = "uploads/";
  
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        Date.now() + "-" + file.originalname
      );
    },
  });
  console.log("Cloudinary not configured. Falling back to local disk storage ('uploads/') for file storage.");
}

const upload = multer({
  storage,
});

module.exports = upload;