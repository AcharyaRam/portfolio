import { Outlet } from "react-router-dom";
import BackgroundFX from "../components/BackgroundFX";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="relative">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[200] rounded-2xl bg-white text-black px-4 py-3 font-semibold"
      >
        Skip to content
      </a>

      <BackgroundFX />
      <Navbar />
      <main id="main" className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
