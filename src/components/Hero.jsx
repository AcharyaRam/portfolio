import profile from "../assets/profile.jpg";
import Reveal from "./Reveal";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-glass backdrop-blur-xl px-4 py-2 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(99,102,241,0.45)]" />
                <span className="text-sm font-semibold text-white/80">
                  Available for opportunities
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={80} className="mt-5">
              <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-white">
               Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200 bg-[length:200%_100%] animate-[gradientShift_5s_ease-in-out_infinite]">Developer </span> in Vadodara
                <span className="block mt-3 text-xl md:text-2xl font-medium text-white/70">
                  Full Stack Developer in Vadodara • React • Node.js • ASP.NET Core
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={160} className="mt-6 max-w-2xl">
              <p className="text-[color:var(--muted)] text-lg leading-relaxed">
                I am a Full Stack Developer based in Vadodara, Gujarat, building high-performance web applications using MERN and ASP.NET Core.
              </p>
            </Reveal>

            <Reveal delayMs={220} className="mt-8">
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3 font-semibold shadow-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] hover:scale-[1.02] transition-transform"
                >
                  View Projects
                  <FiArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-glass backdrop-blur-xl px-5 py-3 font-semibold text-white/90 shadow-lg hover:bg-white/10 hover:border-white/25 hover:shadow-xl transition-all"
                >
                  Contact
                </Link>

                <a
                  href="/Ram_Acharya_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={300} className="mt-8">
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg">
                  <p className="text-sm font-semibold text-white/80">Focus</p>
                  <p className="mt-2 text-white font-semibold">Recruiter-first clarity</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Case studies that answer “what, why, impact”.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg">
                  <p className="text-sm font-semibold text-white/80">Strength</p>
                  <p className="mt-2 text-white font-semibold">Modern web delivery</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Responsive UX, REST APIs, and performance-conscious UI.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={120} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-400/25 via-fuchsia-400/15 to-cyan-300/20 blur-2xl rounded-[2rem]" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-glass backdrop-blur-xl shadow-2xl p-6">
                <div className="flex items-center gap-5">
                  <div className="relative h-28 w-28">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/35 via-fuchsia-400/25 to-cyan-300/30 blur-[3px] animate-[floaty_6s_ease-in-out_infinite]" />
                    <img
                      src={profile}
                      alt="Ram Acharya"
                      width={112}
                      height={112}
                      loading="eager"
                      className="relative h-28 w-28 rounded-full object-cover border border-white/20 shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                      Ram Acharya
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">Full Stack Developer</p>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">
                      React • Node.js • Express • MongoDB • C# / ASP.NET Core
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["UI Craft", "APIs", "Performance"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white/80">Quick Links</p>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      <a
                        href="mailto:ramacharya333@gmail.com"
                        className="group rounded-xl border border-white/10 bg-glass backdrop-blur-xl p-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Email Ram"
                      >
                        <span className="block font-semibold">Email</span>
                        <span className="block text-xs text-white/55 group-hover:text-white/70">Hire me</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/ram-acharya-b9b62326b"
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-white/10 bg-glass backdrop-blur-xl p-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Ram on LinkedIn"
                      >
                        <span className="block font-semibold">LinkedIn</span>
                        <span className="block text-xs text-white/55 group-hover:text-white/70">Connect</span>
                      </a>
                      <a
                        href="https://github.com/AcharyaRam"
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-white/10 bg-glass backdrop-blur-xl p-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Ram on GitHub"
                      >
                        <span className="block font-semibold">GitHub</span>
                        <span className="block text-xs text-white/55 group-hover:text-white/70">Repos</span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-indigo-500/10 via-white/5 to-fuchsia-500/10 p-4">
                    <p className="text-sm font-semibold text-white/80">What you get</p>
                    <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                        Premium UI polish with maintainable components
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                        Clean REST API integration and practical data modeling
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                        Micro-interactions and accessibility-first motion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
