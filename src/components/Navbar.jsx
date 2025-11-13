import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false); 
  };

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-12  flex justify-between items-center transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <h1
        className="text-2xl font-extrabold text-red-500 tracking-wide cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        JOLO<span className="text-white">CHIP</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300 font-semibold">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-red-500 cursor-pointer transition-all duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-gray-300">
          {mobileMenu ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenu && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center py-4 gap-4 md:hidden text-gray-300 font-semibold"
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-red-500 cursor-pointer transition-all duration-300"
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
