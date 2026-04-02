import { useMemo, useState } from "react";
import Reveal from "./Reveal";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "UI engineering and responsive UX that feels premium.",
    skills: [
      {
        name: "React",
        description:
          "I use it to build reusable component systems and deliver responsive UIs with clean state patterns.",
      },
      {
        name: "JavaScript (ES6+)",
        description:
          "I use it to implement reliable UI logic, async flows, and integrations in a readable, maintainable way.",
      },
      {
        name: "HTML5 & CSS3",
        description:
          "I use it to create structured layouts, strong typography hierarchy, and consistent spacing across screens.",
      },
      {
        name: "Responsive Design",
        description:
          "I use it to ensure the UI stays clear and usable on mobile, tablet, and desktop with a mobile-first approach.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Structured APIs and real-world application logic.",
    skills: [
      {
        name: "ASP.NET Core",
        description:
          "I use it to build structured backend systems and secure APIs for real-world modules like inventory and billing.",
      },
      {
        name: "C#",
        description:
          "I use it to write clean business logic and keep backend systems maintainable as features grow.",
      },
      {
        name: "Entity Framework",
        description:
          "I use it for database access and CRUD workflows while keeping data integrity consistent across modules.",
      },
      {
        name: "Node.js + Express.js",
        description:
          "I use it to build REST APIs and connect frontend flows to backend services in full-stack projects like Fixit.",
      },
      {
        name: "Authentication",
        description:
          "I use it to protect routes and implement role-based access (Admin/Staff) where needed in production workflows.",
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Practical data storage and query fundamentals.",
    skills: [
      {
        name: "SQL Server",
        description:
          "I use it to store and query transactional application data for systems like Pulse Pharma.",
      },
      {
        name: "MongoDB",
        description:
          "I use it for flexible data models in MERN projects, especially when iterating quickly on features.",
      },
      {
        name: "MySQL",
        description:
          "I use it when a relational database fits the project’s needs and schema is well-defined.",
      },
    ],
  },
];

export default function Skills() {
  const [activeCat, setActiveCat] = useState(categories[0].id);

  const cat = useMemo(() => categories.find((c) => c.id === activeCat) ?? categories[0], [activeCat]);

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
                Skills, explained through usage
              </h2>
              <p className="mt-4 text-[color:var(--muted)] leading-relaxed text-lg">
                No ratings. No progress bars. Just the tools I use and how I apply them in real projects.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="hidden md:block">
            <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-white/80">How I use these</p>
              <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                I focus on clarity: building clean UI, structured APIs, and data flows that stay maintainable in real-world applications.
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
            <Reveal delayMs={80}>
              <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/80">{cat.label}</p>
                    <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      <p className="text-lg font-semibold text-white">{s.name}</p>
                      <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
