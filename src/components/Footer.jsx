import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-black via-red-800 to-black text-gray-300 py-10 px-4 sm:px-8 md:px-16 text-center"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400 mb-3">
        Contact Us
      </h3>
      <p className="text-sm sm:text-base md:text-base text-gray-400 mb-2">
        Email: <span className="text-white font-medium">support@jolochip.com</span>
      </p>
      <p className="text-sm sm:text-base md:text-base text-gray-400 mb-6">
        Follow us on Instagram:{" "}
        <span className="text-white font-medium">@Jolochip</span>
      </p>

      <p className="text-xs sm:text-sm md:text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">Jolochip</span> — All Rights Reserved 🌶️
      </p>
    </motion.footer>
  );
}
