const pool = require("../config/db");

exports.getProfile = async (req,res)=>{

  try{

    const { id } = req.params;

    const result =
      await pool.query(
        `
        SELECT
          id,
          name,
          email,
          college,
          branch,
          graduation_year
        FROM users
        WHERE id=$1
        `,
        [id]
      );

    res.json(result.rows[0]);

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"Error"
    });

  }

};

exports.updateProfile =
async (req,res)=>{

  try{

    const { id } = req.params;

    const {
      name,
      college,
      branch,
      graduation_year
    } = req.body;

    await pool.query(
      `
      UPDATE users
      SET
        name=$1,
        college=$2,
        branch=$3,
        graduation_year=$4
      WHERE id=$5
      `,
      [
        name,
        college,
        branch,
        graduation_year,
        id
      ]
    );

    res.json({
      message:"Profile Updated"
    });

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"Error"
    });

  }

};