import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-700 mb-8 max-w-2xl">
          If you’d like to get in touch regarding opportunities, collaborations,
          or any questions, feel free to reach out. I typically respond within
          <span className="font-medium"> 24 to 48 hours</span>.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">
          
          {/* Email Card */}
          <a
            href="mailto:ramacharya333@gmail.com"
            className="group bg-white border rounded-lg p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg"
          >
            <FaEnvelope className="text-2xl text-gray-600 group-hover:text-black" />
            <span className="text-gray-700 group-hover:text-black">
              Email
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/ram-acharya-b9b62326b"
            target="_blank"
            className="group bg-white border rounded-lg p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg"
          >
            <FaLinkedin className="text-2xl text-gray-600 group-hover:text-black" />
            <span className="text-gray-700 group-hover:text-black">
              LinkedIn
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/AcharyaRam"
            target="_blank"
            className="group bg-white border rounded-lg p-6
                       flex items-center gap-4
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg"
          >
            <FaGithub className="text-2xl text-gray-600 group-hover:text-black" />
            <span className="text-gray-700 group-hover:text-black">
              GitHub
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
