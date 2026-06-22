export default function FAQSection(){
  const faqs=[
    {
       q: "Is InterviewAce AI free?",
      a: "Yes, a free plan is available.",
    },
    {
      q: "Which file formats are supported?",
      a: "PDF and DOCX.",
    },
     {
      q: "Does ATS scoring work in real-time?",
      a: "Yes, analysis is generated instantly.",
    },
    {
      q: "Can I practice mock interviews?",
      a: "Yes, AI-generated interview sessions are available.",
    },
  ];
  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-16">
           Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 space-y-0">
          {faqs.map((faq)=>(
            <div key={faq.q} className="bg-slate-50/70 border border-slate-100 p-6.5 rounded-2xl hover:shadow-sm hover:bg-slate-50 transition-all duration-300">
              <h3 className="font-bold text-slate-800 text-base mb-2.5 flex items-start gap-2">
                <span className="text-indigo-600 text-lg leading-none">?</span>
                {faq.q}
              </h3>
               <p className="text-slate-500 text-sm leading-relaxed pl-4">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}