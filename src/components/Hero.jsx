import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Ram Acharya"
            className="w-40 h-40 rounded-full object-cover border shadow-sm"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m Ram Acharya
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Full Stack Developer (React, Node.js, MongoDB)

          </p>

          <p className="mt-4 text-gray-500 max-w-xl">
            I build clean, responsive web applications and enjoy turning ideas into
            real-world products using modern web technologies.

          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="/Ram_Acharya_Resume.pdf"
              download
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              Download Resume
            </a>

            <a
              href="https://linkedin.com/in/ram-acharya-b9b62326b"
              target="_blank"
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
