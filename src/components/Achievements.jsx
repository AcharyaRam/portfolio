import Reveal from "./Reveal";

const stats = [
  {
    value: "2",
    label: "Featured Projects",
    detail: "Case-study style cards with real stacks and repos.",
  },
  {
    value: "2",
    label: "NPTEL Certifications",
    detail: "IoT + Networking foundations applied to modern web thinking.",
  },
  {
    value: "React + Node",
    label: "Core Stack",
    detail: "Front-end craft + reliable back-end APIs.",
  },
  {
    value: "Mobile-first",
    label: "Recruiter-friendly UX",
    detail: "Clean hierarchy, fast interactions, accessible motion.",
  },
];

export default function Achievements() {
  return (
    <section id="highlights" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
              Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Proof of focus, not fluff
            </h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              The fastest way to evaluate a developer is clarity: what you built, how you built it, and how it performs. These are the signals I optimize for.
            </p>
          </div>

          <Reveal>
            <a
              href="/Ram_Acharya_Resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-white/10 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Download Resume
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delayMs={idx * 120}>
              <div className="h-full rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl transition-transform hover:scale-[1.02]">
                <div className="text-3xl font-semibold text-white">{s.value}</div>
                <div className="mt-2 text-sm font-semibold text-white/90">{s.label}</div>
                <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

