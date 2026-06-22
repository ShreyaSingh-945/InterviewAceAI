import { useNavigate } from "react-router-dom";

function Topbar(){
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="h-18 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
      <h3 className="text-base font-extrabold text-slate-800 tracking-tight">Dashboard Overview</h3>

      <button
        onClick={handleLogout}
        className="px-4 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-100 font-semibold transition text-xs flex items-center gap-1.5 active:scale-95 cursor-pointer bg-white"
      >
        Logout
      </button>
    </div>
  );
}
export default Topbar;