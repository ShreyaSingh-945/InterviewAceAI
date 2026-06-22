import { useEffect, useState } from "react";
import axios from "axios";

import StatCard from "../../components/shared/StatCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";
import SessionCard from "../../components/shared/SessionCard";
import QuickActionCard from "../../components/shared/QuickActionCard";

function Home(){
  const [summary, setSummary] =
useState(null);

useEffect(() => {

  const loadDashboard = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/dashboard/summary/1"
        );

      setSummary(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  loadDashboard();

}, []);
if (!summary)
  return <h2>Loading...</h2>;

const getRelativeDate = (date) => {
  const now = new Date();
  const interviewDate =
    new Date(date);

  const diff =
    Math.floor(
      (now - interviewDate) /
      (1000 * 60 * 60 * 24)
    );

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";

  return `${diff} days ago`;
};
  return (
    <div className="flex flex-col w-full gap-6"> 
      <PageHeader 
        title={`Welcome back, ${summary.userName} 👋`} 
        subtitle="Track your progress, improve your skills, and get interview-ready."
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <StatCard label="Resumes Analyzed" value={summary.resumeCount}/>
        <StatCard label="Sessions Completed" value={summary.totalInterviews}/>
        <StatCard label="Average Performance" value={`${summary.averageScore}%`}/>
        <StatCard label="Interview Readiness" value={`${summary.readinessScore}%`}/>
      </div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
        {/* Left Column: Recent Activity (spans 2 columns) */}
        <div className="lg:col-span-2 flex flex-col w-full">
          <SectionCard
            title="Recent Activity"
            description="Your latest interview practice sessions"
          >
            <div className="mt-4 flex flex-col w-full">
              {summary.recentActivity && summary.recentActivity.length > 0 ? (
                summary.recentActivity.map((session) => (
                  <SessionCard
                    key={session.id}
                    type={session.interview_type}
                    score={session.score}
                    date={getRelativeDate(session.created_at)}
                  />
                ))
              ) : (
                <p className="text-sm text-slate-400 mt-2">No activity recorded yet. Start a session below!</p>
              )}
            </div>
          </SectionCard>
        </div>

        {/* Right Column: Quick Actions (spans 1 column) */}
        <div className="flex flex-col w-full">
          <SectionCard
            title="Quick Actions"
            description="Jump directly into your most-used tools"
          >
            <div className="mt-4 flex flex-col gap-4 w-full">
              <QuickActionCard 
                title="Resume Analyzer" 
                description="Upload and analyze your resume"
                route="/dashboard/resume"
              />
              <QuickActionCard 
                title="JD Matcher" 
                description="Match resume with job descriptions" 
                route="/dashboard/jd"
              />
              <QuickActionCard
                title="Mock Interview"
                description="Practice interactive AI mock rounds"
                route="/dashboard/mock-interview"
              />
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

export default Home;