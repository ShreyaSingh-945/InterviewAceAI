function ResumeCard({ resume,onDelete }){
  return (
    <div className="border border-slate-150 p-6 rounded-2xl bg-white shadow-sm mt-4">
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-50">
        <h3 className="text-base font-extrabold text-slate-800">{resume.filename}</h3>
        <span className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-xl text-xs font-extrabold">
          {resume.score}/100 Score
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-xl">
          <h4 className="text-xxs font-bold text-emerald-800 uppercase tracking-wider mb-2">✓ Key Strengths</h4>
          <p className="text-xs text-emerald-700 leading-relaxed font-medium">{resume.strengths}</p>
        </div>
        <div className="bg-rose-50/40 border border-rose-100/50 p-4 rounded-xl">
          <h4 className="text-xxs font-bold text-rose-800 uppercase tracking-wider mb-2">✗ Weaknesses</h4>
          <p className="text-xs text-rose-700 leading-relaxed font-medium">{resume.weaknesses}</p>
        </div>
        <div className="bg-blue-50/40 border border-blue-100/50 p-4 rounded-xl">
          <h4 className="text-xxs font-bold text-blue-800 uppercase tracking-wider mb-2">💡 Recommendations</h4>
          <p className="text-xs text-blue-700 leading-relaxed font-medium">{resume.suggestions}</p>
        </div>
      </div>

      <div className="flex items-center justify-end border-t border-slate-50 pt-4">
        <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition text-xs cursor-pointer active:scale-95">
          View Details
        </button>
        <button
          onClick={() => onDelete(resume.id)}
          className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-650 font-semibold transition text-xs ml-2 cursor-pointer active:scale-95"
        >
          Delete Analysis
        </button>
      </div>
    </div>
  );
}

export default ResumeCard;