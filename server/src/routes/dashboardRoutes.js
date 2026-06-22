const express = require("express");

const router = express.Router();

const {
  getDashboardSummary,
} = require("../controllers/dashboardController");

router.get(
  "/summary/:userId",
  getDashboardSummary
);

module.exports = router;