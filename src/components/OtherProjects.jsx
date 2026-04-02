import { useMemo, useState } from "react";
import { FiExternalLink, FiGrid, FiInfo } from "react-icons/fi";
import Reveal from "./Reveal";
import Modal from "./Modal";

import marketplaceImg from "../assets/marketplace.png";
import portfolioImg from "../assets/portfolio.png";

function CaseStudyCard({ project, delayMs, onOpen }) {
  return (
    <Reveal delayMs={delayMs}>
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="group w-full text-left rounded-3xl border border-white/10 bg-glass backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all"
        aria-label={`Open case study: ${project.title}`}
      >
        <div className="relative">
          <img
            src={project.cover}
            alt={project.coverAlt}
            loading="lazy"
            className="h-52 w-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-95" />
          <div className="absolute left-6 bottom-6 right-6">
            <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Case Study
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white/80">View details</span>
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
              <FiExternalLink size={16} className="text-white/80" />
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

export default function OtherProjects() {
  const projects = useMemo(
    () => [
      {
        id: "fixit",
        title: "Fixit – Local Services Marketplace",
        subtitle: "Authentication + booking + provider dashboards",
        summary:
          "A marketplace-style platform that connects users with local service providers using React for the UI and Node/Express/MongoDB for the backend.",
        highlights: [
          "Authentication and role-based access control for users and providers",
          "Service listings and booking functionality",
          "Provider dashboard experience",
          "Frontend (React) + backend (Node.js/Express) integration with MongoDB",
        ],
        stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        cover: marketplaceImg,
        coverAlt: "Marketplace project cover image",
        repoUrl: "https://github.com/AcharyaRam/fixit-online-marketplace-for-local-services",
      },
      {
        id: "portfolio",
        title: "Portfolio Website",
        subtitle: "Responsive, recruiter-friendly presentation",
        summary:
          "A modern portfolio built with React + Tailwind that organizes projects, skills, and contact in a clear single-page flow.",
        highlights: [
          "Responsive layout for mobile-first readability",
          "Resume download support via a direct PDF link",
          "Projects and skills presented with clean section hierarchy",
          "Premium interaction polish with modern UI styling",
        ],
        stack: ["React.js", "Tailwind CSS", "Vite"],
        cover: portfolioImg,
        coverAlt: "Portfolio website cover image",
        repoUrl: "https://github.com/AcharyaRam/portfolio",
      },
    ],
    [],
  );

  const [openId, setOpenId] = useState(null);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="other-projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Other Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-white">
            More proof, same quality
          </h2>
          <p className="mt-4 text-lg text-[color:var(--muted)] max-w-2xl leading-relaxed">
            Additional case studies that show your full-stack workflow and production-ready UI craft.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <CaseStudyCard key={p.id} project={p} delayMs={idx * 120} onOpen={setOpenId} />
          ))}
        </div>

        <Modal
          open={Boolean(openProject)}
          onClose={() => setOpenId(null)}
          title={openProject?.title ?? ""}
        >
          {openProject && (
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <p className="text-sm font-semibold text-indigo-300 uppercase tracking-widest">
                  Highlights
                </p>
                <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
                  {openProject.summary}
                </p>

                <ul className="mt-5 grid gap-3">
                  {openProject.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm font-semibold text-indigo-300 uppercase tracking-widest">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {openProject.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-glass px-4 py-2 text-xs font-semibold text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={openProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-5 py-3 font-semibold shadow-lg hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] transition-transform"
                  >
                    View repository
                    <FiExternalLink size={16} />
                  </a>
                  <p className="mt-3 text-xs text-white/60 leading-relaxed">
                    Want a walkthrough? Send a message and I’ll share details.
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                    <FiGrid size={16} />
                    What recruiters scan
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                    <li className="flex items-start gap-2">
                      <FiInfo size={16} className="mt-0.5 text-indigo-300" />
                      Clear module separation and predictable features
                    </li>
                    <li className="flex items-start gap-2">
                      <FiInfo size={16} className="mt-0.5 text-indigo-300" />
                      Practical full-stack integration
                    </li>
                    <li className="flex items-start gap-2">
                      <FiInfo size={16} className="mt-0.5 text-indigo-300" />
                      UI readability and premium interaction polish
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}

