const pool=require("../config/db");
const{extractTextFromPDF,}=require("../services/pdfService")
const {analyzeResume,}=require("../services/resumeAnalysisService");

exports.uploadResume=async(req,res)=>{
 try{
    const text=await extractTextFromPDF(req.file.path);
    console.log(text);
    const analysis=analyzeResume(text);
    console.log(analysis);
    await pool.query(
        `INSERT INTO resumes(filename,resume_text,score,
    strengths,
    weaknesses,
    suggestions) VALUES($1,$2,$3,$4,$5,$6)`,
        [req.file.originalname,text,analysis.score,
    analysis.strengths.join(", "),
    analysis.weaknesses.join(", "),
    analysis.suggestions.join(", "),]
    );
    console.log("Inserted into db");
    res.json({
        message:"Resume uploaded successfully"
    });
 }
 catch(error){
    console.log(error)
    res.status(500).json({
        message:"Upload failed"
    });
 }
}
exports.getResumes=async(req,res)=>{
    try{
        const result=await pool.query(
            `SELECT * FROM resumes ORDER BY id DESC`
        );
        res.json(result.rows);
    }
    catch(error){
        res.status(500).json({
            message:"Error"
        });
    }
};
exports.deleteResume=async(req,res)=>{
    try{
        const {id}=req.params;
        await pool.query(
            "DELETE FROM resumes Where id=$1",[id]
        );
        res.json({
            message:"Resume deleted successfully",
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Delete failed",
        });
    }
};
exports.analyzeResume=async(
    req,res
)=>{
    const { resumeId }=req.body;
    try{
        const score=Math.floor(Math.random()*40)+60;
        await pool.query(`INSERT INTO resume_analysis (
            resume_id,score,strengths,weaknesses,suggestions) VALUES ($1,$2,$3,$4,$5)`,
        [resumeId,score, "Good React Skills",
        "No quantified achievements",
        "Add metrics to projects",]);
        res.json({score,});
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Analysis failed",
        });
    }
};