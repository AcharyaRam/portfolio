import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-glass backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profile}
              alt="Ram Acharya"
              className="w-40 h-40 rounded-full object-cover border border-white/20 shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I’m Ram Acharya
            </h1>

            <p className="mt-3 text-lg text-gray-300">
              Full Stack Developer (React, Node.js, MongoDB)
            </p>

            <p className="mt-4 text-gray-400 max-w-xl">
              I build clean, responsive web applications and enjoy turning ideas into
              real-world products using modern web technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white text-black font-medium 
                           hover:scale-105 hover:shadow-xl 
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                           transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/Ram_Acharya_Resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-glass backdrop-blur-md 
                           border border-white/20 text-white font-medium 
                           hover:bg-white/10 hover:scale-105 
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                           transition duration-300"
              >
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/ram-acharya-b9b62326b"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-white/30 text-white font-medium
                           hover:bg-white/10 hover:scale-105 
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                           transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
