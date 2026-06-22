import { useEffect, useState } from "react";
import axios from "axios";

import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";
import StatCard from "../../components/shared/StatCard";

function Settings() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    graduation_year: ""
  });

  const [summary, setSummary] =
    useState(null);

useEffect(() => {

  const fetchData = async () => {

    try {

      const profileRes =
        await axios.get(
          "http://localhost:5000/api/users/1"
        );

      const summaryRes =
        await axios.get(
          "http://localhost:5000/api/dashboard/summary/1"
        );

      setProfile(profileRes.data);
      setSummary(summaryRes.data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchData();

}, []);

  


  const saveProfile = async () => {

    try {

      await axios.put(
        "http://localhost:5000/api/users/1",
        profile
      );

      alert(
        "Profile Updated Successfully"
      );

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href =
      "/login";

  };

  return (
    <div className="flex flex-col w-full gap-6">

      <PageHeader
        title="Settings"
        subtitle="Manage your profile information, preferences, and account controls."
      />

      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-2">
          <StatCard
            label="Total Sessions"
            value={summary.totalInterviews}
          />

          <StatCard
            label="Average Rating"
            value={`${summary.averageScore}%`}
          />

          <StatCard
            label="Resumes Uploaded"
            value={summary.resumeCount}
          />

          <StatCard
            label="Readiness Index"
            value={`${summary.readinessScore}%`}
          />
        </div>
      )}

      <SectionCard
        title="👤 Profile Information"
        description="Update your default personal, university and branch profile details"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address (Disabled)</label>
            <input
              value={profile.email || ""}
              disabled
              className="w-full px-4 py-3 rounded-xl border border-slate-100 text-slate-400 bg-slate-100 cursor-not-allowed text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
            <input
              value={profile.name || ""}
              placeholder="Your full name"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  name: e.target.value
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">College / University</label>
            <input
              value={profile.college || ""}
              placeholder="e.g. Stanford University"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  college: e.target.value
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Branch / Major</label>
            <input
              value={profile.branch || ""}
              placeholder="e.g. Computer Science"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  branch: e.target.value
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Graduation Year</label>
            <input
              value={profile.graduation_year || ""}
              placeholder="e.g. 2026"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  graduation_year: e.target.value
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2 mt-2">
            <button
              onClick={saveProfile}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white font-bold rounded-xl shadow-md transition active:scale-98 text-sm cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="🎯 Interview Preferences"
        description="Configure your default mock interview settings"
      >
        <div className="mt-4 flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center text-sm border-b border-slate-100 py-3 text-slate-650 max-w-xl">
            <span className="font-semibold">Default Interview Type:</span>
            <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-xs">
              Frontend Development
            </span>
          </div>

          <div className="flex justify-between items-center text-sm border-b border-slate-100 py-3 text-slate-650 max-w-xl">
            <span className="font-semibold">Default Difficulty:</span>
            <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-xs">
              Medium Level
            </span>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="⚠️ Danger Zone"
        description="Irreversible actions relating to your user session and account"
      >
        <div className="border border-red-200 bg-red-50/30 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 w-full">
          <div>
            <h4 className="text-sm font-bold text-red-800">Logout from Account</h4>
            <p className="text-xs text-red-600/80 leading-relaxed mt-0.5">This will delete your local token store credentials and return you to the login screen.</p>
          </div>
          <button
            onClick={logout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition active:scale-95 shadow-md shadow-red-150 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            Logout
          </button>
        </div>
      </SectionCard>

    </div>
  );
}

export default Settings;