import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "UI craft, responsive layouts, and interaction polish.",
    skills: [
      { name: "React UI", level: 92, description: "Component-driven development with clean state patterns and accessible markup." },
      { name: "JavaScript (ES6+)", level: 90, description: "Readable async flows, robust front-end logic, and modern language features." },
      { name: "HTML5 & CSS3", level: 88, description: "Typography-first design, spacing systems, and pixel-accurate styling." },
      { name: "Responsive UX", level: 86, description: "Mobile-first layouts with consistent alignment and performance-conscious UI." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "REST APIs, auth, and data modeling that holds up.",
    skills: [
      { name: "Node.js", level: 86, description: "API logic with practical structure and maintainable routes/services." },
      { name: "Express.js", level: 84, description: "Middleware-driven request handling and clear endpoint design." },
      { name: "MongoDB & Mongoose", level: 82, description: "Schema design, modeling, and query patterns for real app data." },
      { name: "REST API Development", level: 88, description: "Predictable endpoints with clear contracts and integration-ready responses." },
      { name: "JWT Authentication", level: 80, description: "Secure-ish flows for protected routes with token-based auth." },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Ship faster with version control and clean collaboration.",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Branching discipline, PR workflows, and reliable history for collaboration." },
      { name: "Performance-minded UI", level: 78, description: "Avoiding unnecessary re-renders and keeping interactions snappy." },
      { name: "Quality through iteration", level: 80, description: "Refine based on feedback, run quick checks, and improve consistently." },
    ],
  },
];

export default function Skills() {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [selected, setSelected] = useState(categories[0].skills[0].name);

  const cat = useMemo(() => categories.find((c) => c.id === activeCat) ?? categories[0], [activeCat]);

  useEffect(() => {
    const first = cat.skills[0]?.name;
    if (first) setSelected(first);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCat]);

  const selectedSkill = cat.skills.find((s) => s.name === selected) ?? cat.skills[0];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-10 mb-12">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                Skills & Tech Stack
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-white">
                Built for modern teams
              </h2>
              <p className="mt-4 text-[color:var(--muted)] leading-relaxed text-lg">
                An interactive stack view that answers the question recruiters care about: what can you build, end-to-end?
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="hidden md:block">
            <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-white/80">How I use these</p>
              <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                I combine UI craft with practical back-end logic so features feel complete: responsive, secure, and easy to maintain.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-5 shadow-xl">
                <p className="text-sm font-semibold text-white/80">Categories</p>
                <div className="mt-4 grid gap-2">
                  {categories.map((c) => {
                    const isActive = c.id === activeCat;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveCat(c.id)}
                        className={[
                          "w-full text-left rounded-2xl border px-4 py-3 transition-all",
                          isActive
                            ? "border-white/20 bg-white/10 text-white shadow-lg"
                            : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10",
                        ].join(" ")}
                        aria-pressed={isActive}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold text-sm">{c.label}</span>
                          <span className="text-xs text-white/50">{c.skills.length} skills</span>
                        </div>
                        <p className="mt-1 text-xs text-[color:var(--muted)]">{c.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delayMs={80}>
                <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">Skill spotlight</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedSkill.name}</h3>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed">{selectedSkill.description}</p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white/70">
                      <span>Proficiency</span>
                      <span>{selectedSkill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10 border border-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300"
                        style={{ width: `${selectedSkill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={160}>
                <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">
                    {cat.label} skills
                  </p>
                  <div className="mt-4 grid gap-3">
                    {cat.skills.map((s) => {
                      const isSel = s.name === selected;
                      return (
                        <button
                          key={s.name}
                          type="button"
                          onClick={() => setSelected(s.name)}
                          className={[
                            "rounded-2xl border px-4 py-3 text-left transition-all",
                            isSel
                              ? "border-white/20 bg-white/10 text-white shadow-lg"
                              : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                          ].join(" ")}
                          aria-pressed={isSel}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-sm">{s.name}</span>
                            <span className="text-xs text-white/55">{s.level}%</span>
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden border border-white/10">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300"
                              style={{ width: `${s.level}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-6">
              <Reveal delayMs={220}>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">What this means for you</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Readable code & maintainable structure",
                      "UX polish that feels premium",
                      "Clean API integration",
                      "Smooth interactions & accessible motion",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-glass px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
