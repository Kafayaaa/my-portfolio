import { Big_Shoulders } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { section } from "framer-motion/client";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  display: "swap",
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutSection() {
  return (
    <section id="about">
      <div className="w-screen px-7 md:px-12 lg:px-43 text-foreground relative z-10 flex flex-col items-center justify-center min-h-screen cursor-default overflow-hidden bg-gradient">
        <div className="mb-10 mt-30">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            className="relative z-10 max-w-6xl w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Animated Title */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p
                className={`${bigShoulders.className} text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-slate-800 dark:text-slate-100`}
              >
                ABOUT ME
              </p>
              <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image with decorative elements */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Main image */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl transform rotate-3">
                    <Image
                      src="/images/profile.jpg"
                      alt="Rizqi Kafa Muntaqa"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-lg transform rotate-12"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-lg transform -rotate-6"></div>

                  {/* Floating badges */}
                  {/* <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    Years Exp
                  </span>
                </div> */}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <p className="text-justify text-md md:text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                  Greetings! I&apos;m Rizqi Kafa Muntaqa, a passionate web
                  developer and UI/UX designer based in Indonesia. With a strong
                  foundation in both front-end and back-end development, I
                  specialize in creating dynamic and user-friendly web
                  experiences.
                </p>

                {/* Skills Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Frontend
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      React, Next.js, Tailwind
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Backend
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Laravel
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      UI/UX Design
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Figma
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Graphic Design
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Adobe Illustrator, Adobe Photoshop
                    </p>
                  </div>
                </div>

                <p className="text-justify text-md md:text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                  My expertise in HTML, CSS, JavaScript, and modern frameworks
                  allows me to bring visually stunning and interactive
                  interfaces to life. I have a keen eye for design and a love
                  for creating visually appealing interfaces that captivate
                  users.
                </p>

                {/* Call to Action */}
                {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button> */}
              </motion.div>
            </div>

            {/* Additional info section */}
            <motion.div variants={fadeInUp} className="mt-16 text-center">
              <p className="text-justify text-md md:text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                Whether it&apos;s designing intuitive navigation menus, visually
                appealing landing pages, or engaging user interfaces, I strive
                to deliver exceptional user experiences that leave a lasting
                impression. I am committed to staying up-to-date with the latest
                industry trends and technologies to ensure that my work is
                cutting-edge and effective in today&apos;s digital landscape.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "100%", label: "Satisfaction" },
                { number: "3+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center"
                >
                  <p className="text-3xl font-bold text-blue-500 dark:text-blue-400">
                    {stat.number}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
