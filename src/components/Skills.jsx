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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-3
                text-sm
                text-gray-700
                bg-white
                hover:shadow-md
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-default
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
