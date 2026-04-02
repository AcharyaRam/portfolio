import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const sortedLinks = useMemo(() => links, []);

  useEffect(() => {
    const els = sortedLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.12, 0.22, 0.32], rootMargin: "-20% 0px -60% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sortedLinks]);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onNavClick(e, id) {
    e.preventDefault();
    setMobileOpen(false);

    if (transitioning) return;
    setTransitioning(true);

    window.setTimeout(() => scrollToId(id), 90);
    window.setTimeout(() => setTransitioning(false), 420);
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Smooth transition overlay */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 transition-transform duration-300",
          transitioning ? "scale-x-100" : "scale-x-0",
        ].join(" ")}
      />

      <div className="backdrop-blur-xl bg-glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => onNavClick(e, "top")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-glass shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-tr from-indigo-400/35 via-fuchsia-400/25 to-cyan-300/25 blur-[1px]" />
              <span className="relative text-sm font-bold text-white">RA</span>
            </span>
            <span className="hidden sm:block">
              <span className="block text-base font-semibold text-white leading-tight">
                Ram Acharya
              </span>
              <span className="block text-xs text-white/60 leading-tight">
                Full Stack Developer
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {sortedLinks.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => onNavClick(e, l.id)}
                  className={[
                    "relative text-sm font-semibold transition-colors",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={[
                      "absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300",
                      isActive ? "opacity-100" : "opacity-0",
                      "transition-opacity duration-200",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl text-white/80 hover:text-white hover:shadow-lg transition-all"
              aria-label="Toggle dark/light mode"
            >
              {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl text-white/80 hover:text-white hover:shadow-lg transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={[
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="px-5 pb-4 grid gap-2">
            {sortedLinks.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => onNavClick(e, l.id)}
                  className={[
                    "rounded-2xl border px-4 py-3 text-sm font-semibold transition-all",
                    isActive ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-glass/20 text-white/70 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
