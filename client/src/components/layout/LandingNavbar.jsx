import { Link } from "react-router-dom";
import { useState } from "react";

export default function LandingNavbar(){
  const[isOpen,setIsOpen]=useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent transition hover:opacity-90"
        >
          InterviewAce AI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            Features
          </a>

          <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            How It Works
          </a>

          <a href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            Pricing
          </a>

          <a href="#faq" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            FAQ
          </a>
        </nav>

         <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition font-medium text-sm"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm hover:shadow-md transition font-medium hover:brightness-110 active:scale-95 text-sm"
          >
            Start Free →
          </Link>
        </div>
         {/*Hamburger */}
         <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden text-2xl text-slate-700 hover:text-slate-950 p-2 rounded-lg hover:bg-slate-100 transition">
          ☰
         </button>
      </div>
      {/*Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl rounded-b-2xl absolute left-0 right-0 top-[72px] z-50">
          <a href="#features" className="block font-semibold text-slate-800 hover:text-indigo-600 text-lg transition" onClick={()=>setIsOpen(false)}>
            Features
          </a>
           <a
            href="#how-it-works"
            className="block font-semibold text-slate-800 hover:text-indigo-600 text-lg transition"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>

          <a
            href="#pricing"
            className="block font-semibold text-slate-800 hover:text-indigo-600 text-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="block font-semibold text-slate-800 hover:text-indigo-600 text-lg transition"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          
          <hr className="border-slate-100 my-4" />
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="text-center px-4 py-2.5 rounded-xl text-slate-700 border border-slate-200 hover:bg-slate-50 font-semibold transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-md hover:brightness-110 transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Start Free →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
  