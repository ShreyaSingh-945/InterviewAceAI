const { Pool }=require("pg");

const pool=new Pool({
 connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
 
});
module.exports=pool;

/* user:"postgres",
  host:"localhost",
  database:"interviewace",
  password:"Shreya@321",
  port:5432,*/