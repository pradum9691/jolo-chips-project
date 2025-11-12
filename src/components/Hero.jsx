import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-linear-to-b from-black via-red-900 to-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold mb-6"
      >
        Dare to Taste <span className="text-red-500">🔥 Jolochip</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-300 max-w-2xl"
      >
        The world’s spiciest challenge chip — do you have the courage?
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
      >
        Try Now 🌶️
      </motion.button>
    </section>
  );
}
