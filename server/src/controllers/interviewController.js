const pool=require("../config/db");

const {
    generateQuestion
}=require("../services/interviewService");
const {
  evaluateAnswer,
} = require("../services/interviewEvaluationService");
const {
  generateInterviewQuestion,
} = require(
  "../services/geminiService"
);
exports.startInterview=async(req,res)=>{
    try{
        const{
            userId,
            interviewType,
            difficulty
        }=req.body;

        const session=await pool.query(
            ` INSERT INTO interview_sessions
      (
        user_id,
        interview_type,
        difficulty
      )
      VALUES($1,$2,$3)
      RETURNING *`,[
         userId,
        interviewType,
        difficulty
      ]
        );

       let question;

try {

  question =
    await generateInterviewQuestion(
      interviewType,
      difficulty
    );

}catch(error){

  console.log(
    "Gemini Error:"
  );

  console.log(error);

  question =
    generateQuestion(
      interviewType,
      difficulty
    );
}
       const questionRow= await pool.query(
            `INSERT INTO interview_questions
      (
        session_id,
        question
      )
      VALUES($1,$2) RETURNING *` ,[
        session.rows[0].id,
        question
      ]
        );

        res.json({
            sessionId:session.rows[0].id,
            questionId: questionRow.rows[0].id,
            question: questionRow.rows[0].question,
        });
    }
    catch(error){
         console.log(error);

    res.status(500).json({
      message:"Error"
    });
    }
};

exports.submitAnswer = async (req, res) => {
  try {
    const {
      questionId,
      answer,
    } = req.body;

    const questionResult = await pool.query(
      `
      SELECT *
      FROM interview_questions
      WHERE id = $1
      `,
      [questionId]
    );

    const question =
      questionResult.rows[0];

    const evaluation =
      await evaluateAnswer(
        question.question,
        answer
      );

    await pool.query(
      `
      UPDATE interview_questions
      SET
        user_answer = $1,
        score = $2,
        ai_feedback = $3
      WHERE id = $4
      `,
      [
        answer,
        evaluation.score,
        evaluation.feedback,
        questionId,
      ]
    );

    res.json(evaluation);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error",
    });
  }
};

exports.getSession = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM interview_questions
      WHERE session_id = $1
      `,
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error",
    });
  }
};

exports.getNextQuestion = async (
  req,
  res
) => {
  try {
    const { sessionId } = req.body;

    const session =
      await pool.query(
        `
        SELECT *
        FROM interview_sessions
        WHERE id=$1
        `,
        [sessionId]
      );

    const interviewType =
      session.rows[0].interview_type;

    const existingQuestions =
      await pool.query(
        `
        SELECT question
        FROM interview_questions
        WHERE session_id=$1
        `,
        [sessionId]
      );

    const askedQuestions =
      existingQuestions.rows.map(
        q => q.question
      );

    const nextQuestion =
      generateQuestion(
        interviewType,
        session.rows[0].difficulty,
        askedQuestions
      );

    if (!nextQuestion) {
        

const avgResult = await pool.query(
  `
  SELECT AVG(score) as avg_score
  FROM interview_questions
  WHERE session_id=$1
  `,
  [sessionId]
);
const finalScore =
  Number(
    avgResult.rows[0].avg_score
  ).toFixed(2);

  await pool.query(
  `
  UPDATE interview_sessions
  SET status='completed',score=$1
  WHERE id=$2
  `,
  [finalScore,sessionId]
);
      return res.json({
        completed: true,finalScore,
      });
    }

    const question =
      await pool.query(
        `
        INSERT INTO interview_questions
        (
          session_id,
          question,
          question_number
        )
        VALUES ($1,$2,$3)
        RETURNING *
        `,
        [
          sessionId,
          nextQuestion,
          askedQuestions.length + 1,
        ]
      );

    res.json({
      completed: false,
      question:
        question.rows[0],
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error",
    });
  }
};

exports.getInterviewReport = async (
  req,
  res
) => {
  try {
    const { userId } = req.params;

    const sessionResult =
      await pool.query(
        `
        SELECT *
        FROM interview_sessions
        WHERE user_id=$1
        AND status='completed'
        ORDER BY id DESC
        LIMIT 1
        `,
        [userId]
      );

    if (
      sessionResult.rows.length === 0
    ) {
      return res.json({
        session: null,
        questions: [],
      });
    }

    const session =
      sessionResult.rows[0];

    const questions =
      await pool.query(
        `
        SELECT *
        FROM interview_questions
        WHERE session_id=$1
        ORDER BY id
        `,
        [session.id]
      );

    res.json({
      session,
      questions: questions.rows,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error",
    });
  }
};