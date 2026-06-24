import { useEffect, useState } from "react";
import axios from "axios";

import StatCard from "../../components/shared/StatCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";
import SessionCard from "../../components/shared/SessionCard";
import QuickActionCard from "../../components/shared/QuickActionCard";

function Home(){
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user.id || 1;

        const res = await axios.get(
          `https://interviewaceai-rpmo.onrender.com/api/dashboard/summary/${userId}`
        );

        setSummary(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load dashboard data. Please try again.");
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 w-full text-center">
        <span className="text-3xl animate-pulse">⏳</span>
        <h2 className="text-lg font-bold text-slate-700 mt-4">Loading Dashboard...</h2>
        <p className="text-sm text-slate-400 mt-1 max-w-md">
          If this is the first load in a while, it may take up to a minute for the Render backend server to wake up.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-12 w-full text-center">
        <span className="text-3xl">⚠️</span>
        <h2 className="text-lg font-bold text-red-650 mt-4">{error}</h2>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow hover:brightness-110 active:scale-98 transition cursor-pointer"
        >
          Retry Connection
        </button>
      </div>
    );
  }

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