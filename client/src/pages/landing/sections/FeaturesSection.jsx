export default function FeaturesSection(){
  const features=[
    {
       icon: "📄",
      title: "Resume Analyzer",
      desc: "Get ATS score and detailed resume feedback.",
    },
    {
      icon: "🎯",
      title: "JD Matcher",
      desc: "Compare resume against job descriptions.",
    },
    {
      icon: "🎤",
      title: "Mock Interview",
      desc: "Practice interviews with AI-generated questions.",
    },
    {
      icon: "🧠",
      title: "Viva Simulator",
      desc: "Prepare for academic and technical viva rounds.",
    },
    {
      icon: "💻",
      title: "DSA Round",
      desc: "Sharpen coding and problem-solving skills.",
    },
     {
      icon: "📈",
      title: "Analytics",
      desc: "Track progress and interview readiness.",
    },
  ];
  return (
    <section id="features" className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-4">
          Everything You Need to Succeed
        </h2>

        <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-16">
          A comprehensive suite of tools built to assist your career preparation at every step.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-indigo-50/80 border border-indigo-100/50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
        
  );
}