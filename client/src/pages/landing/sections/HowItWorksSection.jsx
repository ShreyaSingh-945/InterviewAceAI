export default function HowItWorksSection(){
  const steps=[
    {
      number: "01",
      title: "Upload Resume",
      desc: "Upload your resume in PDF or DOCX format.",
    },
    {
      number: "02",
      title: "Get AI Analysis",
      desc: "Receive ATS score and personalized feedback.",
    },
    {
      number: "03",
      title: "Practice & Improve",
      desc: "Take mock interviews and follow your roadmap.",
    },
  ];
  return(
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step)=>(
            <div
              key={step.number}
              className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center relative flex flex-col items-center"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4 font-mono">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}