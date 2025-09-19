import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Big_Shoulders } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  display: "swap",
});

export default function HomeSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const texts = ["Web Developer", "UI/UX Designer", "Graphic Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  // Function untuk scroll ke bawah
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Running Text Background */}
      <section id="home">
        <div className="absolute inset-0 overflow-hidden z-0 flex items-center bg-gradient">
          <motion.div
            className={`${bigShoulders.className} whitespace-nowrap text-[6rem] md:text-[9rem] xl:text-[15rem] font-black text-violet-400/50 select-none`}
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            RIZQI KAFA MUNTAQA • RIZQI KAFA MUNTAQA • RIZQI KAFA MUNTAQA •
          </motion.div>
        </div>
        <div className="flex min-h-screen w-full items-center justify-center cursor-default overflow-hidden">
          {/* <div className="flex flex-col min-h-screen w-full pt-30 md:pt-0 lg:pt-30 items-center justify-center cursor-default overflow-hidden"> */}
          <div className="w-screen px-7 md:px-12 lg:px-43 text-foreground relative z-10">
            <p className="text-xl md:text-3xl font-light mb-3 text-center">
              Hi, I&apos;m <span className="font-bold">Kafa!</span>{" "}
            </p>

            {/* Animated text */}
            <div className="h-7 mb-5 overflow-hidden relative xl:h-10 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentTextIndex}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                  }}
                  className="text-sm md:text-lg xl:text-md text-center font-light"
                >
                  {texts[currentTextIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3D Flip Card Container */}
            <div
              className="relative mb-8 w-64 h-64 cursor-default mx-auto"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of the card (Profile) */}
                <div
                  className="absolute inset-0 w-4/6 md:w-5/6 2xl:w-full 2xl:h-full backface-hidden mx-auto"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="p-4 pb-10 bg-white shadow-2xl shadow-white/30 flex items-center justify-center">
                    <div className="relative overflow-hidden w-full">
                      <Image
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        height={300}
                        width={300}
                        className="object-cover transform"
                        style={{ transform: "translateZ(20px)" }}
                      />

                      {/* Efek highlight */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Back of the card (Additional image/info) */}
                <div
                  className="absolute inset-0 w-4/6 md:w-5/6 2xl:w-full 2xl:h-full backface-hidden mx-auto"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="p-4 pb-10 bg-white shadow-2xl shadow-white/30 flex items-center justify-center">
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src="/images/profile.jpg"
                        alt="Card Back"
                        height={300}
                        width={300}
                        className="object-cover"
                      />

                      {/* Teks atau konten tambahan di belakang kartu */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-bold mb-2">
                            Creative Mind
                          </h3>
                          <p className="text-sm">Design • Develop • Create</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Shadow effect */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-amber-900/30 blur-md rounded-full"
                animate={{
                  scale: isFlipped ? 0.9 : 1,
                  opacity: isFlipped ? 0.6 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>

            {/* Konten teks dengan margin yang aman */}
            <div className="w-full max-w-2xl flex flex-col align-center mx-auto px-4 mt-10 md:mt-20 xl:mt-35">
              <p className="text-sm font-light mb-7 xl:text-lg text-center">
                I&apos;am a passionate and creative individual who loves to
                design and develop beautiful and functional websites.
              </p>

              <div className="flex items-center justify-center gap-4 border-3 w-auto mx-auto rounded-full bg-violet-300/20 backdrop-blur-sm border-white/20">
                <p className="text-sm font-light xl:text-lg text-center pl-7">
                  Let&apos;s connect with me
                </p>

                {/* Animated Scroll Down Button */}
                <motion.button
                  onClick={scrollToNextSection}
                  className="flex flex-col items-center justify-center p-2 xl:p-5 rounded-full bg-violet-300/20 hover:bg-violet/40 transition-all duration-300 backdrop-blur-sm border border-white/20 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Scroll to next section"
                >
                  {/* Animated Arrow */}
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
