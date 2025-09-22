import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Brand */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Abdul Korim</h3>
          <p>Frontend Developer creating modern, responsive, and interactive websites.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://github.com/abdul-korim-web/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-korim-webdeveloper/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/abdulkorimweb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebook size={20} />
            </a>
            <a href="mailto:abdulkorimwebdeveloper@gmail.com" className="hover:text-white transition">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition">About Me</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <p>Email: <a href="mailto:abdulkorimwebdeveloper@gmail.com" className="hover:text-white transition">abdulkorimwebdeveloper@gmail.com</a></p>
          <p>Phone: +8801617465389</p>
          <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} Abdul Korim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
