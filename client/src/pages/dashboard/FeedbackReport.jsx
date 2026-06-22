import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";

function FeedbackReport() {
    const [report, setReport] = useState(null);
    
    useEffect(() => {
        const loadReport = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/interview/report/1"
                );
                setReport(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        loadReport();
    }, []);

    if (!report) return (
        <div className="flex flex-col items-center justify-center p-12 w-full text-center">
            <span className="text-3xl animate-pulse">⏳</span>
            <h2 className="text-lg font-bold text-slate-700 mt-4">Loading Report...</h2>
        </div>
    );

    return (
        <div className="flex flex-col w-full gap-6">
            <PageHeader 
                title="Interview Feedback Report" 
                subtitle="Review your AI generated score ratings and evaluation summaries."
            />

            {/* Score summary panel */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="text-xl font-extrabold tracking-tight">Session Review Details</h2>
                    <p className="text-indigo-100 text-xs mt-1 leading-relaxed">Detailed breakdown of answers, correct metrics, and constructive feedback pointers.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10 text-center shrink-0 self-start sm:self-auto">
                    <span className="text-xxs font-bold uppercase tracking-wider block opacity-80 mb-0.5">Final Rating Score</span>
                    <span className="text-2xl font-black">{report?.session?.score}/10</span>
                </div>
            </div>

            {/* Questions list */}
            <div className="flex flex-col w-full">
                {report.questions && report.questions.length > 0 ? (
                    report.questions.map((q, idx) => (
                        <div key={q.id} className="bg-white border border-slate-150 p-6 rounded-2xl shadow-sm mb-6 flex flex-col gap-4.5 w-full">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                                <span className="text-xxs font-bold text-slate-400 uppercase tracking-wider">Question #{idx + 1}</span>
                                <span className="px-2.5 py-1 bg-indigo-50 border border-indigo-100 text-indigo-750 rounded-lg text-xxs font-bold shadow-inner">
                                    Rating Score: {q.score}/10
                                </span>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl leading-relaxed">
                                <h3 className="text-sm font-bold text-slate-800">{q.question}</h3>
                            </div>

                            <div className="border border-slate-100 bg-slate-50/20 p-4.5 rounded-xl shadow-inner">
                                <span className="text-xxs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Response</span>
                                <p className="text-xs text-slate-650 font-medium leading-relaxed">{q.user_answer}</p>
                            </div>

                            <div className="bg-indigo-50/20 border border-indigo-100/30 p-4.5 rounded-xl leading-relaxed">
                                <span className="text-xxs font-bold text-indigo-650 uppercase tracking-wider block mb-1">AI Feedback & Guidelines</span>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">{q.ai_feedback}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-slate-400 italic">No interview questions analyzed in this session.</p>
                )}
            </div>
        </div>
    );
}

export default FeedbackReport;