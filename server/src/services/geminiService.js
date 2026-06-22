const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

exports.generateInterviewQuestion =
  async (
    interviewType,
    difficulty
  ) => {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

    const prompt = `
You are a technical interviewer.

Generate ONE interview question.

Interview Type:
${interviewType}

Difficulty:
${difficulty}

Rules:
- Return only the question
- No numbering
- No explanation
`;

    const result =
      await model.generateContent(
        prompt
      );

    return result.response
      .text()
      .trim();
  };