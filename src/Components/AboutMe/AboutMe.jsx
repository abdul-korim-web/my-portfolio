import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-16"
        >
          About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
        </motion.h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/image/logo.png"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-indigo-500 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Hi, I'm <span className="text-indigo-600">Abdul Korim</span> 👋
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A passionate <span className="font-semibold text-indigo-600">Frontend Developer</span> 
              who loves creating <span className="font-semibold">modern, responsive, and user-friendly</span> web applications. 
              I focus on writing clean code and delivering smooth user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Skilled in <span className="font-semibold">React.js, Tailwind CSS, Framer Motion, and UI/UX design</span>, 
              I enjoy transforming ideas into real-world solutions.  
              My goal is to grow as a developer while helping businesses build impactful digital products.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="px-7 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-500 transition duration-300"
              >
                🚀 View My Projects
              </a>
              <a
                href="/contact"
                className="px-7 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                📩 Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Extra Section Divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            "Designing beautiful interfaces and building smooth user experiences is not just my work, it's my passion."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
