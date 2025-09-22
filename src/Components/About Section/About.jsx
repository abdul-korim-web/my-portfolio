import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // 🔥 বারবার trigger হবে
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="image/logo.png"
            alt="About Abdul Korim"
            className="rounded-2xl shadow-xl w-80 h-80 object-cover border-4 border-indigo-500/30"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // 🔥 বারবার trigger হবে
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Abdul Korim
            </span>
            . I’m a passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Frontend Developer
            </span>{" "}
            who loves turning ideas into beautiful, responsive and user-friendly
            websites. I mainly work with{" "}
            <span className="font-semibold">React, TailwindCSS</span> and modern
            JavaScript frameworks to build interactive experiences.
          </p>

          {/* Highlights / Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-5 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">🎨 UI Development</h3>
              <p className="text-sm mt-2">Clean, modern & responsive designs</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-5 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">⚛ React Ecosystem</h3>
              <p className="text-sm mt-2">React, Hooks, Context API</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-5 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">⚡ Styling</h3>
              <p className="text-sm mt-2">TailwindCSS, MUI, Framer Motion</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-5 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">🚀 Goal</h3>
              <p className="text-sm mt-2">
                Grow as a skilled Frontend Developer & contribute to big projects
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
