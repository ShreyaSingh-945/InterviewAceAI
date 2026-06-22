require("dotenv").config();
const resumeRoutes=require("./src/routes/resumeRoutes");
const app=require("./src/app");

const interviewRoutes = require(
  "./src/modules/interview/interview.routes"
);
const dashboardRoutes =
require("./src/routes/dashboardRoutes");

const analyticsRoutes =
require(
 "./src/modules/analytics/analytics.routes"
);
const userRoutes =
require(
"./src/modules/user/user.routes"
);
app.use("/api/interview", interviewRoutes);
app.use(
  "/api/dashboard",
  dashboardRoutes
);
app.use(
 "/api/analytics",
 analyticsRoutes
);
app.use(
"/api/users",
userRoutes
);
app.listen(5000,()=>{
  console.log("server running");
});