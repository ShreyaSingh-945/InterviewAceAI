function SessionCard({
  type,
  score,
  date,
}) {
  return (
    <div className="border border-slate-100 bg-slate-50/30 p-4.5 rounded-xl mb-3 flex items-center justify-between hover:bg-slate-50 transition duration-150 w-full">
      <div>
        <h3 className="text-sm font-extrabold text-slate-850 uppercase tracking-wide">{type}</h3>
        <p className="text-xxs text-slate-400 mt-1 font-semibold">{date}</p>
      </div>

      <div className={`px-3.5 py-1.5 rounded-xl text-xs font-black shadow-inner ${
        score >= 80 
          ? "bg-emerald-50 border border-emerald-100 text-emerald-700" 
          : score >= 60 
            ? "bg-amber-50 border border-amber-100 text-amber-700" 
            : "bg-rose-50 border border-rose-100 text-rose-700"
      }`}>
        {score}% Score
      </div>
    </div>
  );
}

export default SessionCard;