const pool=require("../config/db");

const{
    matchResumeWithJD,

}=require("../services/jdMatcherService");

exports.matchJD=async(
    req,res
)=>{
    try{
        const{
            resumeId,jobDescription,
        }=req.body;

        const resume=await pool.query("SELECT * FROM resumes WHERE id=$1",[resumeId]);
        console.log("Resume ID:", resumeId);
console.log("Resume Query Result:", resume.rows);
       const{score,matchedSkills,missingSkills}=matchResumeWithJD(resume.rows[0].resume_text,jobDescription);
        await pool.query(
  `
  INSERT INTO jd_matches
  (
    resume_id,
    job_description,
    score,
    matched_skills,
    missing_skills
  )
  VALUES ($1,$2,$3,$4,$5)
  `,
  [
    resumeId,
    jobDescription,
    score,
    matchedSkills,
    missingSkills,
  ]
);
        res.json({score,matchedSkills,missingSkills});
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"ERROR"
        });
    }
};
exports.getJDMatches=async(req,res)=>{
    try{
        const result=await pool.query(
            `SELECT* FROM  jd_matches ORDER BY created_at DESC`
        );
        res.json(result.rows);

    }
    catch(error){
        console.log(error);
    }
}