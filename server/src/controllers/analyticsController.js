const pool = require("../config/db");

exports.getAnalytics = async (req, res) => {
  try {

    const { userId } = req.params;

    const sessions = await pool.query(
      `
      SELECT *
      FROM interview_sessions
      WHERE user_id=$1
      ORDER BY id
      `,
      [userId]
    );

    const totalInterviews =
      sessions.rows.length;

    const scores =
      sessions.rows
        .map(s => Number(s.score || 0));

    const averageScore =
      scores.length
        ? (
            scores.reduce(
              (a,b)=>a+b,
              0
            ) / scores.length
          ).toFixed(2)
        : 0;

    const highestScore =
      scores.length
        ? Math.max(...scores)
        : 0;

    const lowestScore =
      scores.length
        ? Math.min(...scores)
        : 0;

    res.json({
      totalInterviews,
      averageScore,
      highestScore,
      lowestScore,
      sessions: sessions.rows
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:"Error"
    });
  }
};