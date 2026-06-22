const express =require('express');
const cors=require("cors");
const app=express();
const pool=require("./config/db");
const authRoutes=require("./modules/auth/auth.routes");
const resumeRoutes=require("./routes/resumeRoutes");
const jdRoutes=require("./routes/jdRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/resume",resumeRoutes);
app.use("/api/jd",jdRoutes);

app.get("/",(req,res)=>{
  res.send("Backend is working");
});
app.get("/api/test",(req,res)=>{
  res .json({message:"InterviewAce AI API Working"});
});
app.get("/api/users",async(req,res)=>{
  try{
    const result=await pool.query(
      "SELECT * FROM users"
    );
    res.json(result.rows);
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      message:"Server Error",
    });
  }
});
module.exports=app;