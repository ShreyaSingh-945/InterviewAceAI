import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
function HeroSection(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/50 min-h-[90vh] flex items-center pt-8">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/*Left Side*/}
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
              🚀 AI-Powered Career Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight mb-6">
              Land Your <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Dream Job</span> Faster with AI
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Upload resumes, analyze job descriptions, practice mock interviews with real-time feedback, and generate your career growth roadmap.
            </p>
            
            {/*CTA Buttons*/}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link 
                to="/register" 
                className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all text-base"
              >
                Start Free
              </Link>
              <button 
                className="border border-slate-200 bg-white text-slate-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-base"
              >
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-slate-500 font-medium border-t border-slate-100 pt-6 w-full">
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✔</span> 10,000+ Users
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✔</span> 95% Success Rate
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✔</span> Real-time AI Feedback
              </div>
            </div>
          </div>

          {/*Right Side*/}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-violet-400 rounded-3xl rotate-3 scale-102 opacity-10 blur-lg"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                <h3 className="text-xl font-bold text-slate-800">Candidate Scorecard</h3>
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-semibold">Active Session</span>
              </div>
              
              {/*Score */}
              <div className="mb-6">
                <div className="flex justify-between font-semibold text-slate-700 mb-2">
                  <span>Resume Score</span>
                  <span className="text-indigo-600">91%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full transition-all duration-1000" style={{ width: '91%' }}></div>
                </div>
              </div>

              {/*Skills */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-slate-600 mb-1.5">
                    <span>Communication</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-slate-600 mb-1.5">
                    <span>Technical Skills</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-slate-600 mb-1.5">
                    <span>Confidence</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>

              {/*Bottom*/}
              <div className="mt-8 p-4.5 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 flex items-center justify-between">
                <span className="text-slate-700 font-medium">🎯 Readiness Index:</span>
                <span className="text-indigo-700 font-extrabold text-lg">89%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;