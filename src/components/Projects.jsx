import { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import Modal from "./Modal";

import marketplaceImg from "../assets/marketplace.png";
import portfolioImg from "../assets/portfolio.png";

function Projects() {
  const projects = useMemo(
    () => [
      {
        id: "marketplace",
        title: "Online Marketplace for Local Services",
        subtitle: "Connect clients with trusted local providers",
        summary:
          "A full-stack marketplace concept built for discovery, clean UX, and integration-ready API design between users and providers.",
        highlights: [
          "Category-first browsing experience for faster discovery",
          "Auth-ready flow using JWT concept and protected routes idea",
          "REST API design built for scalable integration",
        ],
        stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        repoUrl: "https://github.com/AcharyaRam/fixit-online-marketplace-for-local-services",
        cover: marketplaceImg,
        coverAlt: "Local services marketplace cover image",
      },
      {
        id: "portfolio",
        title: "Personal Portfolio Website",
        subtitle: "Premium storytelling with modern UI polish",
        summary:
          "A recruiter-friendly portfolio with case-study style project presentation, smooth interactions, and conversion-focused contact UX.",
        highlights: [
          "Glass + gradient depth system for a premium aesthetic",
          "Scroll reveal animations and micro-interactions",
          "Clean section hierarchy designed for quick scanning",
        ],
        stack: ["React", "Tailwind CSS", "Vite"],
        repoUrl: "https://github.com/AcharyaRam/portfolio",
        cover: portfolioImg,
        coverAlt: "Portfolio cover image",
      },
    ],
    [],
  );

  const [openId, setOpenId] = useState(null);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-white">
            Case studies recruiters can scan fast
          </h2>
          <p className="mt-4 text-lg text-[color:var(--muted)] max-w-2xl leading-relaxed">
            Click a project for a compact case-study breakdown (highlights + stack).
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delayMs={idx * 120} className="lg:col-span-1">
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                className="group w-full text-left rounded-3xl border border-white/10 bg-glass backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all"
                aria-label={`Open case study: ${p.title}`}
              >
                <div className="relative">
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    loading="lazy"
                    className="w-full h-52 object-cover brightness-90 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute left-5 bottom-5 right-5">
                    <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                      Case Study
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[color:var(--muted)] leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white/80">
                      View details
                    </span>
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                      <FiExternalLink size={16} className="text-white/80" />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}

          <Reveal delayMs={360}>
            <div className="lg:col-span-1">
              <div className="h-full rounded-3xl border border-dashed border-white/20 bg-white/5 backdrop-blur-xl p-7 shadow-xl flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                    In Progress
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    More projects, more impact
                  </h3>
                  <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
                    I’m currently building new real-world applications. If you want a walkthrough, I can share what’s next.
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 hover:border-white/25 transition-colors"
                  >
                    Request a walkthrough
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
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
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Projects;
