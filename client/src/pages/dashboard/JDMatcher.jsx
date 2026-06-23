import { useState, useEffect } from "react";
import axios from "axios";
import SectionCard from "../../components/shared/SectionCard";
import PageHeader from "../../components/shared/PageHeader";
function JDMatcher() {

  const [jd, setJD] = useState("");
  const [result, setResult] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");
  const [history, setHistory] = useState([]);
 

  
  useEffect(() => {
    const fetchResumes = async () => {
    try {
      const res = await axios.get(
        "https://interviewaceai-rpmo.onrender.com/api/resume/list"
      );

      setResumes(res.data);

      if (res.data.length > 0) {
        setSelectedResume(res.data[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };
    fetchResumes();
  }, []);

 
  useEffect(() => {
     const fetchHistory = async () => {
    const res = await axios.get("https://interviewaceai-rpmo.onrender.com/api/jd/history");
    setHistory(res.data);
  }
    fetchHistory();
  }, []);
  const handleMatch = async () => {
    const res = await axios.post(
      "https://interviewaceai-rpmo.onrender.com/api/jd/match", {
      resumeId: selectedResume,
      jobDescription: jd,
    }
    );
    setResult(res.data);
  };

  return (

    <>
      <PageHeader
        title="JD Matcher"
        subtitle="Compare your resume with job descriptions"
      />
      <SectionCard title="Job Description Matcher" description="Select an uploaded resume and paste the target job description to match skills.">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="block text-xs font-bold text-slate-550 uppercase tracking-wider mb-2">Choose Resume</label>
            <select 
              value={selectedResume} 
              onChange={(e) => setSelectedResume(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-xl border border-slate-200 text-slate-700 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm cursor-pointer font-semibold"
            >
              {resumes.map((resume) => (
                <option key={resume.id} value={resume.id}>
                  {resume.filename}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-550 uppercase tracking-wider mb-2">Job Description</label>
            <textarea
              value={jd}
              onChange={(e) => setJD(e.target.value)}
              placeholder="Paste the Job Description (JD) text here to compare skills and get an ATS match score..."
              className="w-full min-h-[180px] p-4.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-455 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white resize-y leading-relaxed"
            />
          </div>
        </div>

        <button 
          onClick={handleMatch} 
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white font-bold rounded-xl shadow-md transition active:scale-98 text-sm mt-5 cursor-pointer"
        >
          Match Resume
        </button>

        {result && (
          <SectionCard 
            title="Match Results"
            description="AI-generated ATS capability matching analysis"
          >
            <div className="flex items-center justify-between bg-indigo-50/50 border border-indigo-100/50 p-4.5 rounded-2xl mb-6">
              <span className="text-sm font-bold text-slate-700">ATS Resume Compatibility Score:</span>
              <span className="text-xl font-black text-indigo-700 bg-white border border-indigo-100 shadow-sm px-4 py-1.5 rounded-xl">
                {result.score}%
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">✓ Matched Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {result.matchedSkills && result.matchedSkills.length > 0 ? (
                    result.matchedSkills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-lg text-xxs font-semibold">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 font-medium italic">No overlapping skills matched.</span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">✗ Missing / Gaps</h4>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills && result.missingSkills.length > 0 ? (
                    result.missingSkills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-rose-50 border border-rose-100 text-rose-700 rounded-lg text-xxs font-semibold">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 font-medium italic">No missing skills detected! Excellent!</span>
                  )}
                </div>
              </div>
            </div>
          </SectionCard>
        )}
      </SectionCard>

      <SectionCard title="Previous Matches" description="History of comparative analyses">
        <div className="flex flex-col gap-3 mt-2 w-full">
          {history && history.length > 0 ? (
            history.map((item) => (
              <div key={item.id} className="border border-slate-100 bg-slate-50/20 p-4.5 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3 hover:bg-slate-50/50 transition">
                <div>
                  <span className="text-xxs font-bold text-slate-400 uppercase tracking-wider block mb-1">Analysis ID #{item.id}</span>
                  <p className="text-xs text-slate-600 max-w-xl truncate leading-relaxed">
                    {item.job_description || item.jobDescription || "Job Match Analysis"}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-xl text-xs font-extrabold shadow-sm shrink-0 self-start md:self-auto">
                  Score: {item.match_score ?? item.score}%
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-400 mt-2">No match history recorded yet.</p>
          )}
        </div>
      </SectionCard>
    </>

  );
}

export default JDMatcher;