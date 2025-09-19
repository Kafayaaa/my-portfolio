import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const colors = [
  "text-red-500",
  "text-orange-500",
  "text-amber-500",
  "text-yellow-500",
  "text-lime-500",
  "text-green-500",
  "text-emerald-500",
  "text-teal-500",
  "text-cyan-500",
  "text-sky-500",
  "text-blue-500",
  "text-indigo-500",
  "text-violet-500",
  "text-purple-500",
  "text-fuchsia-500",
  "text-pink-500",
  "text-rose-500",
];

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      setIsInside(inside);
      if (inside) setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="theme-light h-screen w-full flex flex-col xl:flex-row items-center xl:items-end justify-between cursor-default relative overflow-hidden"
      style={{ backgroundColor: "#fff" }}
    >
      {mounted && isInside && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            WebkitMaskImage: `radial-gradient(circle 8rem at ${mouse.x}px ${mouse.y}px, white 0, transparent 100%)`,
            maskImage: `radial-gradient(circle 8rem at ${mouse.x}px ${mouse.y}px, white 0, transparent 100%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      <div className="w-full h-screen flex justify-center items-end relative">
        <div className="flex flex-col-reverse justify-center items-center text-center mb-40 px-10">
          <p
            className={`text-7xl font-black mt-40 z-3 tracking-[-.05em] text-shadow-lg transition-colors duration-1000 ${colors[colorIndex]}`}
          >
            GRAPHIC DESIGNER
          </p>
          <p className="text-3xl font-bold">RIZQI KAFA MUNTAQA</p>
          <p className="text-md font-medium">Hi! I&apos;m</p>
        </div>
        <div className="absolute bottom-0 inset-x-0 w-full z-2">
          <div className="flex justify-center items-end px-10">
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-full h-auto object-cover drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
