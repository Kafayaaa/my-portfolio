import { motion } from "framer-motion";
import { Big_Shoulders } from "next/font/google";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkedAlt,
} from "react-icons/fa";

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "rizqikafamuntaqa777@gmail.com",
      link: "mailto:rizqikafamuntaqa777@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+62 851-5548-4801",
      link: "tel:+6285155484801",
    },
    {
      icon: <FaMapMarkedAlt className="text-2xl" />,
      title: "Location",
      value: "Magelang, Central Java, Indonesia",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/kafayaaa",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://linkedin.com/in/rizqikafamuntaqa",
      color: "hover:text-blue-600",
    },
    {
      name: "Behance",
      icon: <FaBehance className="text-2xl" />,
      url: "https://behance.net/rizqikmuntaqa",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://instagram.com/kafayaaa__",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      className="w-screen px-7 md:px-12 lg:px-43 py-20 md:py-28 relative z-10 bg-gradient"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
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
            CONTACT
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let&apos;s connect and explore how I can contribute to your project.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        <div className="flex justify-center items-center">
          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Let&apos;s Talk About Your Project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Saya selalu tertarik untuk mendengar tentang project baru dan
                peluang kolaborasi. Mari berbicara tentang bagaimana saya dapat
                membantu mewujudkan ide Anda menjadi kenyataan.
              </p>
            </div> */}

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
                Follow Me On
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-md flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div> */}

          {/* Submit Button */}
          {/* <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button> */}

          {/* Status Message */}
          {/* {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div> */}
        </div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <p className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Rizqi Kafa Muntaqa. All rights
            reserved. Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
