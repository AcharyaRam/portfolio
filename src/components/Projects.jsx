import marketplaceImg from "../assets/marketplace.png";
import portfolioImg from "../assets/portfolio.png";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-14 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* ================= PROJECT 1 ================= */}
          <div className="group bg-glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden
                          shadow-xl hover:scale-[1.02] hover:shadow-2xl
                          transition duration-300 flex flex-col h-full">
            
            <div className="rounded-xl overflow-hidden">
              <img
                src={marketplaceImg}
                alt="Online Marketplace for Local Services"
                className="w-full h-48 object-cover
                           brightness-90 group-hover:brightness-100
                           transition-all duration-500
                           group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Online Marketplace for Local Services
              </h3>

              <p className="text-gray-300 mb-4">
                A web platform that connects users with local service providers
                such as electricians, plumbers, and home maintenance professionals.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                React · Tailwind CSS · Node.js · Express · MongoDB
              </p>

              <div className="mt-auto">
                <a
                  href="https://github.com/AcharyaRam/fixit-online-marketplace-for-local-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-lg
                             border border-white/30 text-white text-sm
                             hover:bg-white/10 hover:scale-105
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
                             transition duration-300"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div className="group bg-glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden
                          shadow-xl hover:scale-[1.02] hover:shadow-2xl
                          transition duration-300 flex flex-col h-full">
            
            <div className="rounded-xl overflow-hidden">
              <img
                src={portfolioImg}
                alt="Portfolio Website"
                className="w-full h-48 object-cover
                           brightness-90 group-hover:brightness-100
                           transition-all duration-500
                           group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-300 mb-4">
                A responsive personal portfolio showcasing my projects,
                skills, certifications, and contact information.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                React · Tailwind CSS · Vite
              </p>

              <div className="mt-auto">
                <a
                  href="https://github.com/AcharyaRam/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-lg
                             border border-white/30 text-white text-sm
                             hover:bg-white/10 hover:scale-105
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
                             transition duration-300"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>

          {/* ================= COMING SOON ================= */}
          <div className="bg-glass backdrop-blur-xl border border-dashed border-white/20 rounded-2xl
                          flex flex-col justify-center items-center text-center
                          shadow-xl hover:scale-[1.02] hover:shadow-2xl
                          transition duration-300">
            <div className="p-10">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Other Projects Coming Soon
              </h3>
              <p className="text-gray-300 text-sm">
                Currently building new real-world applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
