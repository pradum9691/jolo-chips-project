import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-8 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-extrabold text-red-500 tracking-wide cursor-pointer">
        JOLO<span className="text-white">CHIP</span>
      </h1>

      <ul className="flex gap-8 text-gray-300 font-semibold">
        <li
          onClick={() => scrollToSection("hero")}
          className="hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("products")}
          className="hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Products
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Contact
        </li>
      </ul>
    </motion.nav>
  );
}
