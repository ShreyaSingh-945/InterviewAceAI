const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

exports.evaluateAnswer =
  async (
    question,
    answer
  ) => {

    const model =
      genAI.getGenerativeModel({
        model:"gemini-2.0-flash"
      });

    const prompt = `
You are an interview evaluator.

Question:
${question}

Candidate Answer:
${answer}

Return JSON:

{
 "score": 0-10,
 "feedback": "short feedback"
}
`;

    const result =
      await model.generateContent(
        prompt
      );

    const text =
      result.response
        .text()
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text);
};

exports.evaluateAnswer = (question, answer) => {
  let score = 5;

  if (answer.length > 50) score += 2;
  if (answer.length > 120) score += 1;

  if (answer.toLowerCase().includes("example")) {
    score += 1;
  }

  if (score > 10) score = 10;

  return {
    score,
    feedback:
      score >= 8
        ? "Strong answer with good explanation."
        : "Needs more detail and examples.",
  };
};