import marketplaceImg from "../assets/marketplace.png";
import portfolioImg from "../assets/portfolio.png";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= PROJECT 1 ================= */}
          <div className="group bg-white border rounded-lg overflow-hidden
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl
                          flex flex-col h-full">
            
            <div className="overflow-hidden">
              <img
                src={marketplaceImg}
                alt="Online Marketplace for Local Services"
                className="w-full h-48 object-cover
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                Online Marketplace for Local Services
              </h3>

              <p className="text-gray-600 mb-4">
                A web platform that connects users with local service providers
                such as electricians, plumbers, and home maintenance professionals.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                React · Tailwind CSS · Node.js · Express · MongoDB
              </p>

              {/* Button pinned to bottom */}
              <div className="mt-auto">
                <a
                  href="https://github.com/AcharyaRam/fixit-online-marketplace-for-local-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-black rounded-md
                             text-sm hover:bg-black hover:text-white transition"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div className="group bg-white border rounded-lg overflow-hidden
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl
                          flex flex-col h-full">
            
            <div className="overflow-hidden">
              <img
                src={portfolioImg}
                alt="Portfolio Website"
                className="w-full h-48 object-cover
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-600 mb-4">
                A responsive personal portfolio showcasing my projects,
                skills, certifications, and contact information.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                React · Tailwind CSS · Vite
              </p>

              {/* Button pinned to bottom */}
              <div className="mt-auto">
                <a
                  href="https://github.com/AcharyaRam/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-black rounded-md
                             text-sm hover:bg-black hover:text-white transition"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>

          {/* ================= COMING SOON ================= */}
          <div className="bg-white border-2 border-dashed rounded-lg
                          flex flex-col justify-center items-center text-center
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl">
            <div className="p-10">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Other Projects Coming Soon
              </h3>
              <p className="text-gray-500 text-sm">
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
