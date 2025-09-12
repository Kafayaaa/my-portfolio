import { Link } from "react-scroll";
import NextLink from "next/link";

function NavbarLink({
  to,
  children,
  minWidth,
  className = "",
  isActive = false,
  duration = 100,
}: {
  to: string;
  children: React.ReactNode;
  minWidth?: string;
  className?: string;
  isActive?: boolean;
  duration?: number;
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
  return (
    <div className="fixed flex items-center justify-between w-full p-10 z-7 bg-transparent backdrop-blur-xs">
      <NextLink href="/" passHref>
        <span
          className={`text-5xl font-bold text-shadow-lg cursor-pointer ${textColor}`}
        >
          Kafa.
        </span>
      </NextLink>
      <div className={`space-x-10 text-lg ${textColor}`}>
        <NavbarLink
          to="home"
          minWidth="70px"
          isActive={activeSection === "home"}
        >
          Home
        </NavbarLink>
        <NavbarLink
          to="about"
          minWidth="70px"
          isActive={activeSection === "about"}
        >
          About
        </NavbarLink>
        <NavbarLink
          to="design"
          minWidth="80px"
          isActive={activeSection === "design"}
        >
          Design
        </NavbarLink>
        <NavbarLink
          to="contact"
          minWidth="80px"
          isActive={activeSection === "contact"}
        >
          Contact
        </NavbarLink>
      </div>
    </div>
  );
}
