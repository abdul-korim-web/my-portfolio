import React from "react";
import { motion } from "framer-motion";
import { LinearProgress } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    level: "Advanced",
    value: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    level: "Advanced",
    value: 90,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    level: "Advanced",
    value: 88,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    level: "Advanced",
    value: 92,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: "Expert",
    value: 97,
  },

  {
    name: "Git / GitHub",
    icon: <FaGitAlt className="text-red-500" />,
    level: "Advanced",
    value: 85,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    level: "Intermediate",
    value: 65,
  },
];

const NavSkills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 max-w-full overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12"
        >
          My <span className="text-indigo-600">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-left cursor-pointer hover:shadow-xl transition"
            >
              {/* Icon + Name */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 10,
                    borderRadius: "5px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #6366F1, #9333EA)",
                    },
                  }}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.value}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavSkills;
