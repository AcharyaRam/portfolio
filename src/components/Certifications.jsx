function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            NPTEL Swayam Certification – Introduction to Internet of Things{" "}
            <a
              href="/nptel-certificate-1.pdf"
              target="_blank"
              className="underline hover:text-black ml-2"
            >
               Certificate
            </a>
          </p>

          <p>
            NPTEL Swayam Certification – Computer Networks And Internet Protocol{" "}
            <a
              href="/nptel-certificate-2.pdf"
              target="_blank"
              className="underline hover:text-black ml-2"
            >
               Certificate
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
