import React from "react";
import { motion } from "framer-motion";

const messages = [
  "🌶️ The World's Spiciest Chip Challenge • Dare to Try JOLOCHIP? • 🔥 Free Shipping on Orders Above ₹499 🔥",
  "💀 Are You Brave Enough to Take the One Chip Challenge? 💀",
  "🔥 Limited Edition JOLOCHIP Available Now! Grab Yours Before It's Gone! 🔥",
];

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
        {messages.map((msg, index) => (
          <p
            key={index}
            className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mx-8"
          >
            {msg}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
