import { useState } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";

function NavbarLink({
  to,
  children,
  minWidth,
  className = "",
  isActive = false,
  duration = 100,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  minWidth?: string;
  className?: string;
  isActive?: boolean;
  duration?: number;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={duration}
      offset={0}
      className={`hover:cursor-pointer hover:font-extrabold inline-block text-center text-shadow-sm transition-all duration-300 ${
        isActive ? "font-extrabold" : "font-light"
      } ${className}`}
      style={{ minWidth: minWidth }}
      spy={true}
      activeClass="font-extrabold"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar({
  textColor = "text-slate-500",
  activeSection = "home",
}: {
  textColor?: string;
  activeSection?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex items-center justify-between w-full p-5 xl:p-10 z-7 bg-transparent backdrop-blur-xs">
      <NextLink href="/" passHref>
        <span
          className={`text-2xl xl:text-5xl font-bold text-shadow-lg cursor-pointer ${textColor}`}
        >
          Kafa.
        </span>
      </NextLink>
      {/* Desktop menu */}
      <div
        className={`hidden xl:flex xl:space-x-10 text-xs xl:text-lg ${textColor}`}
      >
        <NavbarLink
          to="home"
          minWidth="5rem"
          isActive={activeSection === "home"}
        >
          Home
        </NavbarLink>
        <NavbarLink
          to="about"
          minWidth="5rem"
          isActive={activeSection === "about"}
        >
          About
        </NavbarLink>
        <NavbarLink
          to="design"
          minWidth="5rem"
          isActive={activeSection === "design"}
        >
          Design
        </NavbarLink>
        <NavbarLink
          to="contact"
          minWidth="5rem"
          isActive={activeSection === "contact"}
        >
          Contact
        </NavbarLink>
      </div>
      {/* Hamburger for mobile */}
      <div className="xl:hidden flex items-center">
        <button
          className="p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-slate-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-slate-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-slate-700"></span>
        </button>
        {/* Slide menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } flex flex-col py-10 px-6 space-y-6`}
        >
          <button
            className="self-end mb-8 text-2xl text-slate-700"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <NavbarLink
            to="home"
            minWidth="5rem"
            isActive={activeSection === "home"}
            onClick={() => setOpen(false)}
          >
            Home
          </NavbarLink>
          <NavbarLink
            to="about"
            minWidth="5rem"
            isActive={activeSection === "about"}
            onClick={() => setOpen(false)}
          >
            About
          </NavbarLink>
          <NavbarLink
            to="design"
            minWidth="5rem"
            isActive={activeSection === "design"}
            onClick={() => setOpen(false)}
          >
            Design
          </NavbarLink>
          <NavbarLink
            to="contact"
            minWidth="5rem"
            isActive={activeSection === "contact"}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavbarLink>
        </div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
