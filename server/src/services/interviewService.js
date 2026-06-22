const questionBank =
  require("../data/questionBank");

exports.generateQuestion = (
  type,
  difficulty,
  askedQuestions = []
) => {

  const questions =
    questionBank[type]?.[difficulty] || [];

  const availableQuestions =
    questions.filter(
      q => !askedQuestions.includes(q)
    );

  if (
    availableQuestions.length === 0
  ) {
    return null;
  }

  const randomIndex =
    Math.floor(
      Math.random() *
      availableQuestions.length
    );

  return availableQuestions[randomIndex];
};