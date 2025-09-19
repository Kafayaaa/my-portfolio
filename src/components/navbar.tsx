import { useState, useEffect } from "react";
import { Big_Shoulders } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lineClasses, setLineClasses] = useState(["w-7", "w-5", "w-6"]);
  const [patternIndex, setPatternIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Pola-pola panjang garis yang telah ditentukan
  const widthPatterns = [
    ["w-6", "w-7", "w-5"], // Medium - Panjang - Medium
  ];

  // Data menu
  const menuItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menggunakan pola yang telah ditentukan
  const changeWidths = () => {
    const nextIndex = (patternIndex + 1) % widthPatterns.length;
    setPatternIndex(nextIndex);
    setLineClasses(widthPatterns[nextIndex]);
  };

  const resetWidths = () => {
    setLineClasses(["w-7", "w-5", "w-6"]);
  };

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Effect untuk mendeteksi section yang aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      // Deteksi scroll untuk navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi section yang aktif
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  // Effect untuk menutup menu ketika klik di luar navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".navbar-container") &&
        !target.closest(".hamburger-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`navbar-container fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient py-0 shadow-lg backdrop-blur-md"
          : "bg-transparent py-7"
      } ${bigShoulders.className}`}
    >
      <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-43 py-3 lg:py-5">
        <div className="flex justify-between items-center relative">
          {/* Logo yang bisa di-click ke home */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-3xl xl:text-5xl font-bold text-white cursor-pointer hover:text-violet-300 transition-colors duration-300"
          >
            Kafa.
          </button>

          {/* Hamburger Button */}
          <div className="relative">
            <button
              className="hamburger-button flex flex-col justify-center items-end rounded focus:outline-none transition-all duration-300 ease-in-out cursor-pointer"
              onClick={toggleMenu}
              onMouseEnter={changeWidths}
              onMouseLeave={resetWidths}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`bg-white block transition-all duration-500 ease-out h-1 rounded-sm ${
                  isOpen
                    ? "rotate-45 translate-y-3 w-6"
                    : `-translate-y-0.5 ${lineClasses[0]}`
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-500 ease-out h-1 rounded-sm my-1.5 ${
                  isOpen ? "opacity-0" : `opacity-100 ${lineClasses[1]}`
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-500 ease-out h-1 rounded-sm ${
                  isOpen
                    ? "-rotate-45 -translate-y-2 w-6"
                    : `translate-y-0.5 ${lineClasses[2]}`
                }`}
              ></span>
            </button>

            {/* Mobile Menu */}
            <div
              className={`absolute right-0 mt-2 w-auto bg-gradient backdrop-blur-md shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-96 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <div className="flex flex-col items-end py-2 px-3 text-white text-xl xl:text-5xl font-bold">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`hover:text-violet-300 transition-all duration-300 ease-in-out py-3 px-4 rounded-lg ${
                      activeSection === item.id
                        ? "text-violet-300"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          {/* <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 ease-in-out ${
                  activeSection === item.id
                    ? "text-violet-300 border-b-2 border-violet-300"
                    : "text-white hover:text-violet-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </nav>
  );
}
