import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-linear-to-r from-black via-red-800 to-black text-gray-300 py-10 text-center"
    >
      <h3 className="text-xl font-bold text-red-400 mb-3">Contact Us</h3>
      <p className="text-gray-400 mb-2">Email: support@jolochip.com</p>
      <p className="text-gray-400 mb-6">Follow us on Instagram @Jolochip</p>

      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">Jolochip</span> — All Rights Reserved 🌶️
      </p>
    </motion.footer>
  );
}
