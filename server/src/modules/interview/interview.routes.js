const express=require("express");
const router=express.Router();
const {
    startInterview,
  submitAnswer,
  getSession,getNextQuestion,getInterviewReport
}=require("../../controllers/interviewController");
const controller = require("../../controllers/interviewController");

console.log(controller);
router.post("/start", startInterview);

router.post("/answer", submitAnswer);

router.post(
  "/next-question",
  getNextQuestion
);

router.get(
  "/report/:userId",
  getInterviewReport
);

router.get(
  "/next/:sessionId",
  getNextQuestion
);

router.get("/:id", getSession);
module.exports=router;