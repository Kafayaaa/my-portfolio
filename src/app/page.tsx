"use client";

import Navbar from "../components/navbar";
import HomeSection from "./home-section";
import AboutSection from "./about-section";
import ServicesSection from "./services-section";
import ProjectSection from "./projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
    </>
  );
}
