import Reveal from "./Reveal";

const timeline = [
  {
    title: "B.Tech in Information Technology",
    org: "Student • Practical Web Focus",
    description:
      "I build with a “ship it” mindset—clean UI, reliable APIs, and thoughtful UX. I enjoy turning requirements into polished, responsive interfaces.",
    bullets: ["Mobile-first layout and accessibility", "React UI patterns and state management", "API integration and data modeling"],
  },
  {
    title: "Diploma Internship — KS Technology",
    org: "Hands-on development experience",
    description:
      "Worked in a real-world development environment where I learned how professional projects are planned, built, and maintained.",
    bullets: ["Collaborative development workflow", "Implementation of real features end-to-end", "Learning by reviewing production code"],
  },
  {
    title: "NPTEL Swayam Certifications",
    org: "Internet of Things and Networking",
    description:
      "Dedicated learning across networking and connected systems—helping me think more holistically about modern software.",
    bullets: ["Introduction to Internet of Things", "Computer Networks & Internet Protocol"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
              Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200">
              Experience that ships
            </h2>
          </div>
          <Reveal>
            <div className="hidden md:block rounded-2xl border border-white/10 bg-glass backdrop-blur-xl p-5 shadow-lg">
              <p className="text-sm text-[color:var(--muted)]">
                I focus on outcomes recruiters care about: clarity, performance, and a UI that feels premium.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {timeline.map((item, idx) => (
              <li key={item.title} className="relative pl-0 md:pl-0">
                <div className="absolute left-3 top-7 h-3 w-3 rounded-full bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-cyan-300 shadow-[0_0_20px_rgba(99,102,241,0.35)] md:left-1/2 md:-translate-x-1/2" />

                <div className={idx % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"} />

                <Reveal
                  delayMs={idx * 120}
                  className={[
                    "relative",
                    "ml-0",
                    idx % 2 === 1 ? "md:ml-auto" : "",
                    "max-w-xl",
                    "md:max-w-[44rem]",
                    idx % 2 === 0 ? "md:mr-6" : "md:ml-6",
                  ].join(" ")}
                >
                  <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-[color:var(--muted)]">{item.org}</p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-white/70">
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                        <span>Active learning</span>
                      </div>
                    </div>

                    <p className="mt-4 text-[color:var(--muted)] leading-relaxed">{item.description}</p>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

