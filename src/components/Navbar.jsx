function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Ram Acharya</h1>

        <ul className="flex">
          <li className="mx-3">
            <a href="#about" className="text-gray-700 hover:text-black">
              About
            </a>
          </li>
          <li className="mx-3">
            <a href="#skills" className="text-gray-700 hover:text-black">
              Skills
            </a>
          </li>
          <li className="mx-3">
            <a href="#projects" className="text-gray-700 hover:text-black">
              Projects
            </a>
          </li>
          <li className="mx-3">
            <a href="#contact" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
