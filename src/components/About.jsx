import Reveal from "./Reveal";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                Personal Brand
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200">
                Full Stack Developer in Vadodara, Gujarat
              </h2>
              <p className="mt-3 text-xl text-white/70">
                MERN & ASP.NET Developer building scalable web applications
              </p>
              <p className="mt-4 text-[color:var(--muted)] leading-relaxed text-lg">
              I am a Full Stack Developer based in Vadodara, Gujarat, with a B.Tech in Information Technology. I specialize in building scalable web applications using React, Node.js, and ASP.NET Core.
              </p>
            </Reveal>

            <Reveal delayMs={120} className="mt-6">
              <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                <p className="text-sm font-semibold text-white/80">My Value</p>
                <ul className="mt-3 space-y-3">
                  {[
                    "Premium UI polish with maintainable components",
                    "Practical integrations (React + REST APIs + MongoDB)",
                    "User-first UX with accessible motion and micro-interactions",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1 h-5 w-5 rounded-full bg-indigo-400/20 border border-indigo-400/30 grid place-items-center">
                        <FiCheck className="text-indigo-300" size={14} />
                      </span>
                      <span className="text-[color:var(--muted)]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal delayMs={60}>
                <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">Story</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
                    As a Full Stack Developer in Vadodara, I gained hands-on experience during my internship at KS Technology, working on real-world applications.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={140}>
                <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">How I work</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
                    I plan, build, refine—then focus on the parts users feel: speed, responsiveness, and visual depth.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={220} className="sm:col-span-2">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/10 via-white/5 to-fuchsia-500/10 p-6 shadow-xl">
                  <p className="text-sm font-semibold text-white/80">What I keep improving</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
                    I’m continuously improving by building projects, learning new technologies, and applying knowledge through hands-on practice.
                    My goal is simple: deliver experiences that feel premium and perform reliably.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["React UI", "REST APIs", "MongoDB", "Responsive UX"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delayMs={260} className="mt-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-5 py-3 font-semibold shadow-xl hover:scale-[1.02] transition-transform"
                >
                  View Case Studies
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-glass backdrop-blur-xl px-5 py-3 font-semibold text-white/90 shadow-lg hover:bg-white/10 hover:border-white/25 transition-all"
                >
                  Hire / Collaborate
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
