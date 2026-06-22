const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");

const {
  uploadResume,
  getResumes,
  deleteResume,
  analyzeResume,
} = require("../controllers/resumeController");

// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

// Get All Resumes
router.get(
  "/list",
  getResumes
);

// Delete Resume
router.delete(
  "/:id",
  deleteResume
);

// Analyze Resume
router.post(
  "/analyze",
  analyzeResume
);

module.exports = router;