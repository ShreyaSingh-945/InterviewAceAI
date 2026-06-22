import { Outlet } from "react-router-dom";

function AuthLayout(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50/30 flex flex-col items-center justify-center p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
          InterviewAce AI
        </h1>
      </div>
      <Outlet />
    </div>
  );
}
export default AuthLayout;