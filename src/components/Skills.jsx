function Skills() {
  const skills = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB & Mongoose",
    "REST API Development",
    "JWT Authentication",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-14 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-glass backdrop-blur-xl
                border border-white/10
                rounded-xl px-6 py-4
                text-center text-gray-300 font-medium
                transition-all duration-300
                hover:text-white
                hover:scale-105
                hover:bg-white/10
                hover:border-white/30
                hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
