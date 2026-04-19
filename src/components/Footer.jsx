import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Ram Acharya.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <Link className="hover:text-white transition-colors" to="/projects">
              Projects
            </Link>
            <Link className="hover:text-white transition-colors" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

