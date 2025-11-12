import React from "react";
import { motion } from "framer-motion";

export default function ScrollBar() {
  return (
    <div className="bg-linear-to-r from-red-700 via-black to-red-700 overflow-hidden py-2 border-b border-red-800 fixed top-0 left-0 w-full z-60">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >
        <p className="text-white text-sm sm:text-base font-semibold tracking-wider uppercase mx-8">
          🌶️ The World's Spiciest Chip Challenge • Dare to Try JOLOCHIP? • 🔥 Free Shipping on Orders Above ₹499 🔥
        </p>
        <p className="text-white text-sm sm:text-base font-semibold tracking-wider uppercase mx-8">
          💀 Are You Brave Enough to Take the One Chip Challenge? 💀
        </p>
      </motion.div>
    </div>
  );
}
