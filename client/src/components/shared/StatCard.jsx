function StatCard({label,value}){
  return (
    <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-center min-w-[200px] flex-1 bg-white">
      <h3 className="text-3xl font-black text-indigo-650 tracking-tight leading-none">{value}</h3>
      <p className="text-xxs font-bold text-slate-400 uppercase tracking-wider mt-2.5">{label}</p>
    </div>
  );
}
export default StatCard;