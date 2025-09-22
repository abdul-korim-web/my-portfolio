import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Hero = () => {
  const skills = ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"];
  const roles = ["React Developer", "Frontend Developer", "javascript Developer"];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  // Typing animation for roles (looping)
  useEffect(() => {
    const current = roles[currentRole];
    let timeout;

    if (typingIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + current[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setTypingIndex(0);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 1000); // 1 seconds pause at end of word
    }

    return () => clearTimeout(timeout);
  }, [typingIndex, currentRole, roles]);

  // Skill text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="max-w-full py-20 px-5 flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0 bg-gray-100 dark:bg-gray-900 md:h-[100vh]">
      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="image/logo.png"
          alt="Hero Image"
          className="rounded-2xl shadow-lg w-80 h-80 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hello, I am Abdul Korim{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 block w-full">
            {displayText}
            <span className="inline-block w-1 h-6 bg-gray-900 dark:bg-white animate-pulse ml-1"></span>
          </span>
        </h2>

        <p className="text-xl text-gray-700 dark:text-gray-300 md:w-[50%]">
          I am a passionate Web Developer creating responsive and user-friendly
          websites using{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600">
            {skills[skillIndex]}
          </span>{" "}
          and modern web technologies.
        </p>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-1 rounded-full text-sm font-semibold cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg ${
                skillIndex === index
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-pulse"
                  : "bg-gray-400/50 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(90deg, #4f46e5 0%, #8b5cf6 50%, #ec4899 100%)",
              color: "white",
              fontWeight: 600,
              borderRadius: "50px",
              padding: "10px 25px",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f472b6 100%)",
              },
            }}
          >
            Hire Me
          </Button>

          <Button
            variant="contained"
            sx={{
              borderColor: "white",
              color: "white",
              fontWeight: 600,
              borderRadius: "50px",
              padding: "10px 25px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "white",
                color: "#4f46e5",
                borderColor: "#4f46e5",
              },
            }}
          >
            View Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
