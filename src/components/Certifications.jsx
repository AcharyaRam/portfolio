function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-14 text-white">
          Certifications
        </h2>

        <div className="space-y-6">
          {/* Certificate 1 */}
          <div className="bg-glass backdrop-blur-xl border border-white/10 rounded-2xl p-6
                          flex flex-col sm:flex-row sm:items-center sm:justify-between
                          gap-4 hover:scale-[1.01] hover:shadow-xl transition duration-300">
            <p className="text-gray-300">
              NPTEL Swayam Certification – Introduction to Internet of Things
            </p>
            <a
              href="/nptel-certificate-1.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white
           border border-white/30 px-4 py-2 rounded-lg
           hover:bg-white/10 hover:scale-105
           hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
           transition duration-300"
            >
              View Certificate
            </a>
          </div>

          {/* Certificate 2 */}
          <div className="bg-glass backdrop-blur-xl border border-white/10 rounded-2xl p-6
                          flex flex-col sm:flex-row sm:items-center sm:justify-between
                          gap-4 hover:scale-[1.01] hover:shadow-xl transition duration-300">
            <p className="text-gray-300">
              NPTEL Swayam Certification – Computer Networks And Internet Protocol
            </p>
            <a
              href="/nptel-certificate-2.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white
           border border-white/30 px-4 py-2 rounded-lg
           hover:bg-white/10 hover:scale-105
           hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
           transition duration-300"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
