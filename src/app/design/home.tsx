import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    setMounted(true); // Komponen sudah di-mount di client

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Cek apakah kursor di dalam section
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      setIsInside(inside);
      if (inside) setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="theme-light h-screen w-full flex items-end justify-between cursor-default relative overflow-hidden"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Background image dengan masking hanya setelah mounted */}
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
      {/* Konten utama tetap tampil */}
      <div className="flex flex-col pl-50 pb-30 z-10 relative">
        <div className="pl-1 pb-3">
          <span className="tracking-[+.3em] text-md font-light">
            RIZQI KAFA MUNTAQA{" "}
          </span>
          {"   "}
          <span className="tracking-[-.1em] font-light text-md">
            ----------------------------------------
          </span>
        </div>
        <div className="pb-5 text-7xl font-bold">Graphic Designer</div>
        <div className="max-w-2xl text-lg font-light">
          I create visual concepts to communicate ideas that inspire, inform,
          and captivate consumers.
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-end z-10 relative">
        <Image
          src="/images/profile.png"
          alt="Profile Picture"
          width={400}
          height={400}
          className="w-2/3 h-auto object-cover drop-shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
