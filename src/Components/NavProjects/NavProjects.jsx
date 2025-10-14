import React, { useState } from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description:
      "Weather App is a simple React web application that provides real-time weather updates for any city. Users can search for a city, view temperature, humidity, wind speed, and see a live weather icon.",
    image: "/image/WeatherProject.png",
    liveLink: "https://abdul-weather.netlify.app/",
    sourceLink: "https://github.com/abdul-korim-web/weather",
  },
  {
    title: "Phone Shop",
    description:
      "Phone Shop is a simple e-commerce web application built using React and Redux Toolkit. Users can view products, add them to the cart, update quantities, remove items, and view the total price dynamically.",
    image: "/image/PhoneShop.png",
    liveLink: "https://abdul-phone-shop.netlify.app/",
    sourceLink: "https://github.com/abdul-korim-web/phones-shop",
  },
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
    sourceLink:
      "https://github.com/abdul-korim-web/Wern-Finance-React-Project-2",
  },
];

const NavProjects = () => {
  const [search, setSearch] = useState("");

  // Filtered projects
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          My <span className="text-indigo-600">Projects</span>
        </motion.h2>

        {/* Search Box */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-lg col-span-full">
              No projects found 😢
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavProjects;
