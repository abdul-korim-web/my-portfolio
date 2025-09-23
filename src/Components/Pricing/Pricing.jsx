import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {HashLoader}  from "react-spinners"

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$80",
      features: ["1 Landing Page", "Responsive Design", "Basic SEO"],
      popular: false,
    },
    {
      title: "Standard",
      price: "$150",
      features: [
        "Up to 3 Pages",
        "Responsive Design",
        "SEO Optimization",
        "Email Integration",
      ],
      popular: true,
    },
    {
      title: "Advanced",
      price: "$200",
      features: [
        "5+ Pages",
        "Responsive Design",
        "SEO Optimization",
        "Email & Contact Form",
        "Custom Animations",
      ],
      popular: false,
    },
  ];
  const [isClick,setisClick] = useState(false)
 
  let planBtn = ()=>{
    setisClick(true)
    setTimeout(() => {
    let confirmed = window.confirm(`Do you want to buy this product?`)
    if (confirmed){
      window.open("https://github.com/abdul-korim-web/")
      setisClick(false)
    } else{
      setisClick(false)
    }
      
    }, 2000);
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-white"
        >
          My <span className="text-indigo-600">Pricing</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-3xl p-8 shadow-2xl border transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? "border-indigo-600 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:bg-gray-800"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {plan.title}
              </h3>
              <p className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
              onClick={planBtn}
                className={`w-full py-3 rounded-full font-semibold text-white transition duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
                    : "bg-gray-800 hover:bg-gray-700 cursor-pointer "
                }`}
              >
                {isClick?(<><HashLoader size={20} color="white" /></>):(<>Choose Plan</>)}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
