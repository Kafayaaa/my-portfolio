"use client";

import { useEffect, useState } from "react";
import About from "./about";
import Home from "./home";
import Navbar from "./navbar";

export default function DesignPage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about"];
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tentukan warna berdasarkan section aktif
  const textColor =
    activeSection === "home"
      ? "text-[var(--background)]"
      : "text-[var(--foreground)]";

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar textColor={textColor} activeSection={activeSection} />
      <Home />
      <About />
    </div>
  );
}
