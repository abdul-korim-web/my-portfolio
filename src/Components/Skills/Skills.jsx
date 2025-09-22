import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "TailwindCSS", "JavaScript", "HTML", "CSS", "Git", "MUI", "Framer Motion"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl shadow-lg text-white font-semibold text-lg cursor-default`}
              style={{
                background: `linear-gradient(135deg, hsl(${index * 45}, 80%, 60%), hsl(${index * 45 + 30}, 70%, 50%))`,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
