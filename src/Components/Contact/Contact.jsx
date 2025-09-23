import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_iqnv0t6",      // Service ID
        "template_g82vklf",     // Template ID
        form.current,
        "xG-Ee6hPvZIjFXcVg"    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Contact <span className="text-indigo-600">Me</span>
        </h2>
        <h2 className="text-center mb-3 dark:text-white">Got a project idea or want to collaborate? Fill out the form below and I’ll get back to you.</h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition duration-200"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition duration-200"
          />
          <motion.input
            type="text"
            name="title"
            placeholder="Subject"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition duration-200"
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition duration-200"
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-500 transition duration-300 flex items-center justify-center"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
            ) : null}
            Send Message
          </motion.button>
        </motion.form>

        {status && (
          <motion.p
            className={`mt-4 font-semibold ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
