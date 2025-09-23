import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Wizia Project",
    description:
      "The project features a clean UI, responsive design, and smooth animations for a professional SaaS experience.",
    image: "/image/Wizia.png",
    liveLink: "https://abdul-wizia-react.netlify.app/",
    sourceLink: "https://github.com/abdul-korim-web/Wizia",
  },
  {
    title: "Degic Project",
    description:
      "This project demonstrates responsive UI design, animations, and routing with advanced tools like Tailwind CSS, Framer Motion, and Material UI.",
    image: "/image/DegicPeoject.png",
    liveLink: "https://degic-react-peoject.netlify.app/",
    sourceLink: "https://github.com/abdul-korim-web/Degic-React-Peoject-01",
  },
  {
    title: "Wern Finance",
    description:
      "The project provides features like debit card creation, offers section, reviews, FAQs, and a contact form — all with a clean UI and animations.",
    image: "/image/WernFinance.png",
    liveLink: "https://react-wern-finance.netlify.app/",
    sourceLink: "https://github.com/abdul-korim-web/Wern-Finance-React-Project-2",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/projects"); // React Router page
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                </div>
                <div className="flex justify-between mt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition"
                  >
                    View Project
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={handleViewMore}
          className="mt-5 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-500 transition duration-300"
        >
          View More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
