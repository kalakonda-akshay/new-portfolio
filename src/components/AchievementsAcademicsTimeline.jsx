const milestones = [
  {
    icon: "trophy",
    title: "Prajna-Yukti Competition Winner",
    meta: "Hackathon / Competition Win",
    body: "Winner for the project Unveiling India's Techno-Artistic Heritage.",
  },
  {
    icon: "badge",
    title: "DevPlay'26 Team Leader",
    meta: "TEXUS 2.0 · SRM Institute",
    body: "Led a team during the DevPlay'26 competition at the TEXUS 2.0 fest.",
  },
  {
    icon: "cert",
    title: "NPTEL Programming in Java",
    meta: "IIT Kharagpur · NPTEL · 79%",
    body: "Completed NPTEL Programming in Java through IIT Kharagpur with a consolidated score of 79%, strengthening Java, OOP, and core programming fundamentals.",
  },
  {
    icon: "book",
    title: "Computer Science Engineering",
    meta: "Amrita Vishwa Vidyapeetham · 8.57 CGPA",
    body: "Maintaining a stellar 8.57 CGPA while building full-stack, AI, and cybersecurity projects.",
  },
];

function Icon({ type }) {
  const paths = {
    trophy: "M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Zm10 2h3a3 3 0 0 1-3 3M7 6H4a3 3 0 0 0 3 3",
    badge: "M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7L12 3Z",
    cert: "M6 3h12v18l-6-3-6 3V3Zm3 5h6M9 12h6",
    book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Zm0 0V21",
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[type]} />
    </svg>
  );
}

export default function AchievementsAcademicsTimeline() {
  return (
    <section className="py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-blue-300">Proof of Momentum</p>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Achievements <span className="text-blue-400">& Academics</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400 via-indigo-400 to-transparent md:block" />
          <div className="grid gap-5">
            {milestones.map((item, index) => (
              <article
                key={item.title}
                className={`group relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-900 ${
                  index % 2 ? "md:ml-20" : "md:mr-20"
                }`}
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-blue-200 transition group-hover:scale-110">
                    <Icon type={item.icon} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">{item.meta}</p>
                    <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
