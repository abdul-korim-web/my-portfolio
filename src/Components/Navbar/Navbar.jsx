import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { BeatLoader } from "react-spinners";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const navitems = [
     { item: "Home", path: "/ "},
    { item: "About Me", path: "/about" },
    { item: "Pricing", path: "/pricing" },
    { item: "Skills", path: "/Skills" },
    { item: "Projects", path: "/Projects" },
    { item: "Contact", path: "/Contact" },
  ];

  const [baropen, setbaropen] = useState(false);
  const [loadingBookADemoBtn, setloadingBookADemoBtn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Effect to toggle HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const openPhoneMenu = () => setbaropen(!baropen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const BookADemoBtn = () => {
    setloadingBookADemoBtn(true);
    setTimeout(() => {
      window.open("https://github.com/abdul-korim-web/abdul-korim-web");
      setloadingBookADemoBtn(false);
      setbaropen(false);
    }, 2000);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
    }),
  };

  const navbarBg = darkMode
    ? "bg-gray-900/95 backdrop-blur-md shadow-md"
    : "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600/90 backdrop-blur-md shadow-md";

  const navTextColor = darkMode ? "text-gray-200" : "text-white";
  const hamburgerColor = darkMode ? "text-gray-200" : "text-white";

  let native = useNavigate()

  return (
    <>
      {/* Fixed Top Navbar */}
      <motion.nav
        className={`w-full z-50 flex items-center justify-between px-6 md:px-20 md:py-5 py-3 ${navbarBg}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
            src="/image/logo.png"
            alt="logo"
            onClick={()=>{native(`/`)}}

          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          <ul className="flex space-x-8">
            {navitems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, color: "#0FF1F6", y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`${navTextColor} cursor-pointer font-medium text-lg`}
              >
                <NavLink to={item.path}>{item.item}</NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons + DarkMode */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            onClick={BookADemoBtn}
            variant="contained"
            sx={{
              padding: "6px 18px",
              borderRadius: "100px",
              background: "#0FF1F6",
              color: "#002228",
              fontWeight: 500,
              fontSize: "14px",
              boxShadow: "0px 4px 12px rgba(0, 255, 246, 0.4)",
            }}
          >
            {loadingBookADemoBtn ? <BeatLoader /> : "Book a Demo"}
          </Button>

          {/* Dark Mode Icon */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-lg"
            whileTap={{ scale: 0.9 }}
            title="Toggle Dark Mode"
          >
            <i className="fa-solid fa-moon" style={{ color: darkMode ? "#FFD700" : "#FFFFFF" }}></i>
          </motion.button>
        </div>

        {/* Mobile Hamburger + DarkMode */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Dark Mode Icon */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-lg"
            whileTap={{ scale: 0.9 }}
            title="Toggle Dark Mode"
          >
            <i className="fa-solid fa-moon" style={{ color: darkMode ? "#FFD700" : "#FFFFFF" }}></i>
          </motion.button>

          {/* Hamburger */}
          <motion.button
            onClick={openPhoneMenu}
            className={`text-[22px] ${hamburgerColor}`}
            whileTap={{ scale: 0.8, rotate: 90 }}
          >
            <i
              className={
                baropen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
              }
            ></i>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {baropen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`overflow-hidden md:hidden ${
              darkMode ? "bg-gray-900/95" : "bg-black/80"
            }`}
          >
            <ul className="flex flex-col space-y-3 font-semibold py-4 px-6 items-center">
              {navitems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "#0FF1F6" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${navTextColor} cursor-pointer text-lg`}
                >
                  <NavLink to={item.path} onClick={() => setbaropen(false)}>
                    {item.item}
                  </NavLink>
                </motion.li>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col mt-4 space-y-3 w-full items-center">
                <Button
                  onClick={BookADemoBtn}
                  variant="contained"
                  sx={{
                    borderRadius: "100px",
                    background: "#0FF1F6",
                    color: "#002228",
                    fontWeight: 500,
                    fontSize: "14px",
                    width: "80%",
                    marginBottom:"10px"
                  }}
                >
                  {loadingBookADemoBtn ? <BeatLoader /> : "Book a Demo"}
                </Button>
                
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
