import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message: "Abdul is an exceptional frontend developer. He delivered our project ahead of schedule with amazing UI/UX.",
    image: "/image/john.jpg",
  },
  {
    name: "Jane Smith",
    position: "Project Manager, WebSolutions",
    message: "Working with Abdul was a delight. His React skills and eye for detail are top-notch.",
    image: "/image/jane.jpg",
  },
  {
    name: "Michael Brown",
    position: "CTO, FinTech Co.",
    message: "Abdul's frontend development expertise brought our app to life. Highly recommended!",
    image: "/image/michael.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          What <span className="text-indigo-600 dark:text-indigo-400">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testi.image}
                alt={testi.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-indigo-500/50"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testi.message}"</p>
              <h3 className="font-semibold text-lg">{testi.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">{testi.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
