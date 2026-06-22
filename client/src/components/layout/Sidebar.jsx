import { Link, useLocation } from "react-router-dom";
import { 
  Home as HomeIcon, 
  FileText, 
  Briefcase, 
  Mic, 
  BarChart2, 
  Settings, 
  ClipboardList 
} from "lucide-react";

function Sidebar(){
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard" || location.pathname === "/dashboard/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { name: "Home", path: "/dashboard", icon: HomeIcon },
    { name: "Resume Analyzer", path: "/dashboard/resume", icon: FileText },
    { name: "JD Matcher", path: "/dashboard/jd", icon: Briefcase },
    { name: "Mock Interview", path: "/dashboard/mock-interview", icon: Mic },
    { name: "Feedback Report", path: "/dashboard/feedback-report", icon: ClipboardList },
    { name: "Analytics", path: "/dashboard/analytics", icon: BarChart2 },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-950 text-slate-300 min-h-screen p-5 flex flex-col border-r border-slate-900 shrink-0">
      {/* Brand logo */}
      <div className="flex items-center gap-2 mb-8 px-2 py-4 border-b border-slate-900">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
          A
        </div>
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent tracking-tight">
          InterviewAce AI
        </h2>
      </div>

      {/* Navigation menu */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.path);
          return (
            <Link 
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition duration-150 text-sm font-semibold ${
                active 
                  ? "bg-slate-900 text-white shadow-sm shadow-black/10 border-l-2 border-indigo-500 pl-3.5" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
              }`}
            >
              <IconComponent className={`w-4 h-4 transition ${active ? "text-indigo-400" : "text-slate-500"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer hint */}
      <div className="pt-4 border-t border-slate-900 px-2 text-xxs text-slate-600 font-semibold uppercase tracking-wider">
        System Active v1.0
      </div>
    </div>
  );
}

export default Sidebar;