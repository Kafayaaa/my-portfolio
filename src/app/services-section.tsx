import { motion } from "framer-motion";
import { Big_Shoulders } from "next/font/google";

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

export default function ServicesSection() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: "💻",
      description:
        "Full-stack web development with modern technologies to build responsive, performant, and scalable web applications.",
      skills: ["React/Next.js", "Tailwind CSS", "Laravel"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "Designing intuitive and visually appealing user interfaces and experiences for web and mobile applications.",
      skills: ["Figma"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: "✨",
      description:
        "Creating stunning graphics and visual content for branding, marketing, and digital media.",
      skills: ["Adobe Photoshop", "Illustrator", "Canva"],
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="services"
      className="w-screen px-7 md:px-12 lg:px-43 py-20 md:py-28 relative z-10 bg-gradient"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Title */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p
            className={`${bigShoulders.className} text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-slate-800 dark:text-slate-100`}
          >
            SERVICES
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Service Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Skills Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects Count */}
              {/* <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {service.projects}+ Projects Completed
                </span>
                <div className="w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {service.projects}
                </div>
              </div> */}

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Interested in working together? Let&apos;s create something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Project Together
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
