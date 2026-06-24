const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "",
    allowed_formats: ["pdf", "docx"],

  }
  ,
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({
  storage: storage,
});
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const fileUrl = req.file.path;
    const publicId = req.file.filename;
    res.status(200).json({ success: true, message: "uploaded successfully", url: fileUrl, id: publicId });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error" });
  }
})

module.exports = upload;