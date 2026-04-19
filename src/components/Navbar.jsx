import { useMemo, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

function desktopNavClass({ isActive }) {
  return [
    "relative text-sm font-semibold transition-colors",
    "after:pointer-events-none after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-indigo-400 after:via-fuchsia-400 after:to-cyan-300 after:transition-opacity after:duration-200",
    isActive ? "text-white after:opacity-100" : "text-white/70 hover:text-white after:opacity-0",
  ].join(" ");
}

const mobileLinkClass = ({ isActive }) =>
  [
    "rounded-2xl border px-4 py-3 text-sm font-semibold transition-all",
    isActive
      ? "border-white/20 bg-white/10 text-white"
      : "border-white/10 bg-glass/20 text-white/70 hover:text-white hover:bg-white/10",
  ].join(" ");

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const sortedLinks = useMemo(() => links, []);

  function pulseNavTransition() {
    setTransitioning(true);
    window.setTimeout(() => setTransitioning(false), 320);
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 transition-transform duration-300",
          transitioning ? "scale-x-100" : "scale-x-0",
        ].join(" ")}
      />

      <div className="backdrop-blur-xl bg-glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);
              pulseNavTransition();
            }}
            className="group flex items-center gap-3"
            aria-label="Ram Acharya — Home"
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
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {sortedLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={Boolean(l.end)}
                className={desktopNavClass}
                onClick={pulseNavTransition}
              >
                {l.label}
              </NavLink>
            ))}
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

        <div
          className={[
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="px-5 pb-4 grid gap-2">
            {sortedLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={Boolean(l.end)}
                className={mobileLinkClass}
                onClick={() => {
                  setMobileOpen(false);
                  pulseNavTransition();
                }}
              >
                {l.label}
              </NavLink>
            ))}

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
