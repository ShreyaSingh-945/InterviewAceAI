const extractSkills=(text)=>{
    const skills =[
        "react",
    "node",
    "express",
    "javascript",
    "postgresql",
    "mongodb",
    "docker",
    "aws",
    "git",
    "github",
    ];
    return skills.filter(skill=>text.toLowerCase().includes(skill));
};

const matchResumeWithJD=(
    resumeText,
    jdText
)=>{
    const resumeSkills=extractSkills(resumeText);

    const jdSkills=extractSkills(jdText);
    const matchedSkills=jdSkills.filter(skill=>resumeSkills.includes(skill));

    const missingSkills=jdSkills.filter(skill=>!resumeSkills.includes(skill));

    const score=Math.round(matchedSkills.length/Math.max(jdSkills.length,1)*100);

    return {
        score,matchedSkills,missingSkills,
    };
};

module.exports={matchResumeWithJD};