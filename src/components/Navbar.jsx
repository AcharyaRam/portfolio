function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-white">
          Ram Acharya
        </h1>

        <ul className="flex gap-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition duration-300
                           hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[1px] after:w-0 after:bg-white/70
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
