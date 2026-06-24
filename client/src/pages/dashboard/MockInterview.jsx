import { useState } from "react";
import axios from "axios";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";

function MockInterview() {
  const [interviewType, setInterviewType] = useState("frontend");
  const [difficulty, setDifficulty] = useState("medium");

  const [sessionId, setSessionId] = useState(null);
  const [questionId, setQuestionId] = useState(null);
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(null);

  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  const startInterview = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user.id || 1;

      const res = await axios.post(
        "https://interviewaceai-rpmo.onrender.com/api/interview/start",
        {
          userId,
          interviewType,
          difficulty,
        }
      );

      setSessionId(res.data.sessionId);
      setQuestion(res.data.question);
      setQuestionId(res.data.questionId);

      setAnswer("");
      setFeedback("");
      setScore(null);
      setCompleted(false);
    } catch (error) {
      console.log(error);
      alert("Failed to start interview");
    }
  };

  const submitAnswer = async () => {
    try {
      const res = await axios.post(
        "https://interviewaceai-rpmo.onrender.com/api/interview/answer",
        {
          questionId,
          answer,
        }
      );

      setScore(res.data.score);
      setFeedback(res.data.feedback);
    } catch (error) {
      console.log(error);
      alert("Failed to submit answer");
    }
  };

  const nextQuestion = async () => {
    try {
      const res = await axios.post(
        "https://interviewaceai-rpmo.onrender.com/api/interview/next-question",
        {
          sessionId,
        }
      );

      if (res.data.completed) {
        setCompleted(true);
        setFinalScore(res.data.finalScore);
        return;
      }

      setQuestion(res.data.question.question);
      setQuestionId(res.data.question.id);

      setAnswer("");
      setFeedback("");
      setScore(null);
    } catch (error) {
      console.log(error);
      alert("Failed to load next question");
    }
  };

  return (
    <div>
      <PageHeader
        title="AI Mock Interview"
        subtitle="Practice technical interviews with AI"
      />

      {!sessionId && (
        <SectionCard title="Start Interview" description="Configure your mock session parameters to begin practicing.">
          <div className="mb-5 max-w-md w-full">
            <label className="block text-xs font-bold text-slate-550 uppercase tracking-wider mb-2">Interview Domain</label>
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm cursor-pointer font-semibold"
            >
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="dsa">Data Structures & Algorithms</option>
            </select>
          </div>

          <div className="mb-6 max-w-md w-full">
            <label className="block text-xs font-bold text-slate-550 uppercase tracking-wider mb-2">Difficulty Level</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm cursor-pointer font-semibold"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button 
            onClick={startInterview}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white font-bold rounded-xl shadow-md transition active:scale-98 text-sm cursor-pointer"
          >
            Start Session
          </button>
        </SectionCard>
      )}

      {sessionId && !completed && (
        <SectionCard title="Active Interview Round" description="Provide your best answer. Take your time.">
          <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm mb-6 leading-relaxed">
            <span className="text-xxs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Question Description</span>
            <h3 className="text-base font-bold text-slate-800">{question}</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your detailed answer or code snippet here..."
              className="w-full min-h-[160px] p-4.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-slate-50/50 focus:bg-white resize-y leading-relaxed"
            />
          </div>

          <button
            onClick={submitAnswer}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white font-bold rounded-xl shadow-md transition active:scale-98 text-sm mt-4 cursor-pointer"
          >
            Submit Answer
          </button>

          {score !== null && (
            <div className="mt-8 p-6 bg-slate-50/70 border border-slate-100 rounded-2xl w-full">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-650">AI Answer Rating:</span>
                <span className="px-3.5 py-1 bg-indigo-50 border border-indigo-100 text-indigo-750 rounded-xl text-xs font-extrabold shadow-sm">
                  {score}/10 Rating
                </span>
              </div>

              <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-inner mb-5">
                <span className="text-xxs font-bold text-slate-400 uppercase tracking-wider block mb-1">AI Evaluation Feedback</span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{feedback}</p>
              </div>

              <button
                onClick={nextQuestion}
                className="px-5 py-2.5 bg-indigo-650 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition active:scale-95 cursor-pointer shadow-md"
              >
                Next Question →
              </button>
            </div>
          )}
        </SectionCard>
      )}

      {completed && (
        <SectionCard title="Session Evaluation">
          <div className="flex flex-col items-center justify-center p-8 text-center w-full">
            <span className="text-5xl mb-4">🏆</span>
            <h2 className="text-2xl font-black text-slate-800 mb-1">Interview Completed!</h2>
            <p className="text-sm text-slate-500 mb-6">Here is your overall performance score calculated by AI.</p>
            
            <div className="text-5xl font-black text-indigo-700 bg-indigo-50/50 border border-indigo-100 px-10 py-5 rounded-3xl shadow-inner inline-flex items-baseline mb-8">
              {finalScore}
              <span className="text-lg font-bold text-indigo-400 ml-1.5">/ 10</span>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl text-sm transition active:scale-95 shadow-lg shadow-indigo-100 hover:brightness-110 cursor-pointer"
            >
              Start New Interview
            </button>
          </div>
        </SectionCard>
      )}
    </div>
  );
}

export default MockInterview;