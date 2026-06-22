import { useNavigate } from "react-router-dom";

function QuickActionCard({
  title,
  description,
  route,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="w-full bg-white border border-slate-150 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[140px] group"
    >
      <div>
        <h3 className="text-base font-bold text-slate-850 group-hover:text-indigo-600 transition duration-150">{title}</h3>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{description}</p>
      </div>
      <div className="text-indigo-500 text-xs font-semibold mt-4 flex items-center gap-1 group-hover:gap-1.5 transition-all">
        Open Tool <span className="transition duration-150">→</span>
      </div>
    </div>
  );
}

export default QuickActionCard;