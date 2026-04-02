import Reveal from "./Reveal";

export default function Experience() {
  const education = [
    {
      title: "B.Tech – Information Technology",
      when: "Jun 2023 – Mar 2026",
      where: "Parul Institute of Engineering & Technology, Vadodara",
    },
    {
      title: "Diploma – Information Technology",
      when: "Jul 2020 – Apr 2023",
      where: "Parul Polytechnique Institute, Vadodara",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer Intern — Shlokadigi Software",
      when: "Jan 2026 – Present",
      status: "Active",
      bullets: [
        "Worked on Pulse Pharma (Pharmacy Management Software)",
        "Built responsive frontend modules for inventory, billing, and records",
        "Implemented secure backend APIs using Entity Framework and SQL Server",
        "Developed scalable CRUD operations for medicine and pharmacy data",
        "Authentication + role-based access (Admin / Staff)",
      ],
    },
    {
      title: "Web Developer Intern — KS Technologies",
      when: "Jan 2023 – Mar 2023",
      status: "Completed",
      bullets: [
        "Built responsive UI components using HTML, CSS, and JavaScript",
        "Improved website layouts and worked on small front-end modules",
        "Strengthened debugging, optimization, and cross-browser compatibility",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                Experience & Education
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200">
                Real work. Real learning.
              </h2>
            </div>

            <div className="hidden md:block rounded-2xl border border-white/10 bg-glass backdrop-blur-xl p-5 shadow-lg">
              <p className="text-sm text-[color:var(--muted)] max-w-[26rem]">
                A compact timeline recruiters can scan quickly: education first, then what you built in professional settings.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-6" delayMs={60}>
            <div className="rounded-[2.5rem] border border-white/10 bg-glass backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                  Education
                </p>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/10 bg-white/5">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </span>
              </div>

              <ol className="mt-6 space-y-5">
                {education.map((e, idx) => (
                  <li key={e.title} className="relative">
                    <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-indigo-400/60 via-white/10 to-transparent" />
                    <div className="pl-5">
                      <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                        {idx === 0 ? "Current" : "Foundation"}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{e.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-[color:var(--muted)]">
                        {e.when}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                        {e.where}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="rounded-[2.5rem] border border-white/10 bg-glass backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                  Experience
                </p>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/10 bg-white/5">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                </span>
              </div>

              <ol className="mt-6 space-y-6">
                {experience.map((x) => (
                  <li key={x.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{x.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-[color:var(--muted)]">
                          {x.when}
                        </p>
                      </div>
                      {x.status === "Active" ? (
                        <span className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-glass px-4 py-2 text-xs font-semibold text-white/70">
                          Active
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {x.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-2xl border border-white/10 bg-glass/20 px-3 py-2 text-xs text-white/80"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

