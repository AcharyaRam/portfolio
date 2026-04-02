import { FiArrowRight, FiCheck, FiExternalLink, FiLock, FiShield } from "react-icons/fi";
import Reveal from "./Reveal";

import pulseScreenshot from "../assets/PharmaPulse.png";

const PULSE_LIVE_DEMO_URL =
  "https://pharmacyapp2026-hherbzc8cac7cve8.centralindia-01.azurewebsites.net/Login";

export default function FeaturedPulseProject() {
  const features = [
    "Medicine inventory management",
    "Stock tracking and updates",
    "Billing system with invoice generation",
    "User/Staff management (role-based access if implemented in the project)",
    "CRUD operations for medicines and records",
    "Secure backend APIs",
    "Database management with Entity Framework",
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-10 mb-10">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                Featured Project
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-200">
                Pulse Pharma
              </h2>
              <p className="mt-4 text-lg text-[color:var(--muted)] leading-relaxed">
                A Pharmacy Management System built using ASP.NET Core, C#, Entity Framework, and SQL Server.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={140}>
            <div className="hidden md:flex flex-col items-end gap-3 rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(99,102,241,0.5)]" />
                <p className="text-sm font-semibold text-white/80">Recruiter-friendly case study</p>
              </div>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed text-right max-w-[24rem]">
                Clear modules, reliable CRUD + data integrity, and secure backend API design.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 shadow-lg hover:bg-white/10 hover:border-white/25 hover:shadow-[0_0_32px_rgba(255,255,255,0.12)] transition-colors"
              >
                Discuss this project
                <FiArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5" delayMs={60}>
            <div className="rounded-[2.5rem] border border-white/10 bg-glass backdrop-blur-xl p-4 shadow-2xl overflow-hidden">
              <div className="relative rounded-[1.8rem] overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={pulseScreenshot}
                  alt="Pulse Pharma — Super Admin dashboard screenshot"
                  className="h-[340px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                    Screenshot area
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Super Admin dashboard (Pulse Pharma)
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { icon: FiCheck, label: "Inventory" },
                  { icon: FiCheck, label: "Billing" },
                  { icon: FiLock, label: "Secure APIs" },
                  { icon: FiShield, label: "EF + SQL" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-3"
                  >
                    <x.icon className="text-indigo-300" size={18} />
                    <p className="text-sm font-semibold text-white/80">{x.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={120}>
            <div className="rounded-[2.5rem] border border-white/10 bg-glass backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex flex-wrap items-center gap-3">
                {["ASP.NET Core", "C#", "Entity Framework", "SQL Server"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white/80">What this project does</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed text-sm">
                    Centralized pharmacy management with reliable inventory tracking, billing/invoices, and CRUD-based workflows backed by Entity Framework.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/10 via-white/5 to-fuchsia-500/10 p-6">
                  <p className="text-sm font-semibold text-white/80">Why it matters</p>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed text-sm">
                    Designed for dependable real-world usage: clear data modules, secure backend API patterns, and consistent database operations.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold tracking-widest text-indigo-300 uppercase">
                  Key features
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {features.map((f, idx) => (
                    <li
                      key={`${f}-${idx}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 flex items-start gap-3"
                    >
                      <span className="mt-1 h-5 w-5 rounded-full bg-indigo-400/20 border border-indigo-400/30 grid place-items-center">
                        <FiCheck className="text-indigo-200" size={14} />
                      </span>
                      <span className="text-sm text-[color:var(--muted)] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={PULSE_LIVE_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white text-black px-6 py-3 font-semibold shadow-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] hover:scale-[1.02] transition-transform"
                >
                  Live Demo
                  <FiExternalLink size={16} aria-hidden />
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/80">Next step</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)] leading-relaxed">
                    Want a walkthrough tailored to your role (inventory, billing, APIs)?
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-6 py-3 font-semibold shadow-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] hover:scale-[1.02] transition-transform"
                >
                  Hire / Collaborate
                  <FiArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

