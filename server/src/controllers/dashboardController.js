const pool = require("../config/db");

exports.getDashboardSummary = async (req, res) => {
  try {
    const { userId } = req.params;
     const userResult = await pool.query(
  `
  SELECT name
  FROM users
  WHERE id = $1
  `,
  [userId]
);

const userName =
  userResult.rows[0]?.name || "User";
    // Total interviews
  
    const totalInterviewsResult =
      await pool.query(
        `
        SELECT COUNT(*) as total
        FROM interview_sessions
        WHERE user_id = $1
        `,
        [userId]
      );

    // Average score

    const averageScoreResult =
      await pool.query(
        `
        SELECT AVG(score) as avg_score
        FROM interview_sessions
        WHERE user_id = $1
        AND status='completed'
        `,
        [userId]
      );

    // Resume count

   const resumeResult =
  await pool.query(
    `
    SELECT COUNT(*) as total
    FROM resumes
    WHERE user_id = $1
    `,
    [userId]
  );

    const totalInterviews =
      Number(
        totalInterviewsResult.rows[0].total
      );

    const averageScore =
      Number(
        averageScoreResult.rows[0].avg_score || 0
      ).toFixed(2);

    const resumeCount =
      Number(
        resumeResult.rows[0].total
      );

    // Basic readiness formula

    const readinessScore =
      Math.min(
        100,
        Math.round(
          (averageScore * 10) +
          totalInterviews
        )
      );
      const recentActivityResult =
  await pool.query(
    `
    SELECT
      id,
      interview_type,
      score,
      created_at
    FROM interview_sessions
    WHERE user_id = $1 AND status='completed'
    ORDER BY created_at DESC
    LIMIT 3
    `,
    [userId]
  );

    res.json({
        userName,
      totalInterviews,
      averageScore,
      resumeCount,
      readinessScore,
       recentActivity:
    recentActivityResult.rows,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error",
    });
  }
};