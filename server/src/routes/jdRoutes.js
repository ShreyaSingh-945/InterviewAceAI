const express=require("express");
const{
    matchJD,
    getJDMatches,
}=require("../controllers/jdController");

const router=express.Router();

router.post(
    "/match",matchJD
);

router.get("/history",getJDMatches);
module.exports=router;