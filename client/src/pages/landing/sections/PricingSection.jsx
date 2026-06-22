export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-16">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

          {/* Free Card */}
          <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[420px] bg-white">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Free</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-slate-900">$0</span>
                <span className="text-slate-400 text-sm ml-2">/ lifetime</span>
              </div>

              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Resume Upload
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Basic ATS Score
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Limited Sessions
                </li>
              </ul>
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition text-sm">
              Get Started
            </button>
          </div>

          {/* Pro Card (Glowing / Standard Hero) */}
          <div className="border-2 border-indigo-600 rounded-3xl p-8 shadow-xl shadow-indigo-100/50 flex flex-col justify-between min-h-[450px] relative bg-white scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 mt-2">Pro</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-slate-900">$9</span>
                <span className="text-slate-400 text-sm ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-2.5 font-medium">
                  <span className="text-indigo-600 font-bold">✓</span> Unlimited Analysis
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <span className="text-indigo-600 font-bold">✓</span> Mock Interviews
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <span className="text-indigo-600 font-bold">✓</span> Career Roadmaps
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <span className="text-indigo-600 font-bold">✓</span> Advanced Analytics
                </li>
              </ul>
            </div>
            <button className="w-full mt-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-md shadow-indigo-100 hover:brightness-110 active:scale-98 transition text-sm">
              Upgrade to Pro
            </button>
          </div>

          {/* Team Card */}
          <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[420px] bg-white">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Team</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-slate-900">$29</span>
                <span className="text-slate-400 text-sm ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Team Dashboard
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span> Shared Analytics
                </li>
              </ul>
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition text-sm">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}