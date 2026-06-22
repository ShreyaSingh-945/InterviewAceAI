export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Shreya",
      company: "Amazon",
      quote:
        "The Resume Analyzer increased my ATS score from 62 to 91.",
    },
    {
      name: "Rahul",
      company: "Google",
      quote:
        "Mock Interviews helped me crack my final technical round.",
    },
    {
      name: "Ananya",
      company: "Microsoft",
      quote:
        "The roadmap feature gave me a clear preparation strategy.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/75 border-y border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-16">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-amber-400 text-sm mb-4 tracking-wider">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-slate-600 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-slate-50 pt-4 mt-2">
                <h4 className="font-bold text-slate-800">
                  {item.name}
                </h4>

                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Placed at {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}