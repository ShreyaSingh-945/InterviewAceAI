const analyzeResume = (resumeText) => {
  let score = 50;

  const strengths = [];
  const weaknesses = [];
  const suggestions = [];

  const text = resumeText.toLowerCase();

  const skills = [
    "react",
    "node",
    "express",
    "javascript",
    "git",
    "github",
  ];

  skills.forEach((skill) => {
    if (text.includes(skill)) {
      score += 5;
      strengths.push(skill);
    }
  });

  if (!text.includes("postgresql")) {
    weaknesses.push("Missing PostgreSQL");
    suggestions.push("Learn and add PostgreSQL");
  }

  if (!text.includes("docker")) {
    weaknesses.push("Missing Docker");
    suggestions.push("Learn Docker");
  }

  if (!text.includes("aws")) {
    weaknesses.push("Missing Cloud Skills");
    suggestions.push("Learn AWS Basics");
  }

  if (score > 100) score = 100;

  return {
    score,
    strengths,
    weaknesses,
    suggestions,
  };
};

module.exports = {
  analyzeResume,
};