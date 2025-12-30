import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-14 text-white">
          Contact
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl">
          If you’d like to get in touch regarding opportunities, collaborations,
          or any questions, feel free to reach out. I typically respond within
          <span className="text-white font-medium"> 24 to 48 hours</span>.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">

          {/* Email */}
          <a
            href="mailto:ramacharya333@gmail.com"
            className="group cursor-pointer
                       bg-glass backdrop-blur-xl
                       border border-white/10 rounded-2xl p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:scale-[1.05]
                       hover:border-white/40
                       hover:bg-white/10
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
                       focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <FaEnvelope
              className="text-2xl text-gray-300
                         group-hover:text-white
                         group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]
                         transition"
            />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              Email
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ram-acharya-b9b62326b"
            target="_blank"
            rel="noreferrer"
            className="group cursor-pointer
                       bg-glass backdrop-blur-xl
                       border border-white/10 rounded-2xl p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:scale-[1.05]
                       hover:border-white/40
                       hover:bg-white/10
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
                       focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <FaLinkedin
              className="text-2xl text-gray-300
                         group-hover:text-white
                         group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]
                         transition"
            />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AcharyaRam"
            target="_blank"
            rel="noreferrer"
            className="group cursor-pointer
                       bg-glass backdrop-blur-xl
                       border border-white/10 rounded-2xl p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:scale-[1.05]
                       hover:border-white/40
                       hover:bg-white/10
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
                       focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <FaGithub
              className="text-2xl text-gray-300
                         group-hover:text-white
                         group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]
                         transition"
            />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              GitHub
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
