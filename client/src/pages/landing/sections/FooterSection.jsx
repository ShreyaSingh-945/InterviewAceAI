import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div className="space-y-4">
            <h3 className="font-extrabold text-white text-xl tracking-tight">
              InterviewAce AI
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              Elevating career readiness using advanced AI to review resumes, match jobs, and practice technical rounds.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Product</h4>

            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Resume Analyzer</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">JD Matcher</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mock Interview</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Resources</h4>

            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Legal</h4>

            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-500">
          © 2026 InterviewAce AI. All rights reserved. Built with precision.
        </div>

      </div>
    </footer>
  );
}