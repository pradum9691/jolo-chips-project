import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.pinimg.com/1200x/60/57/6d/60576d8d62e463bac7c70fcad7032435.jpg",
  "https://i.pinimg.com/1200x/f9/0c/d3/f90cd3041a44f9f575b8f1bb5f8e7d75.jpg",
  "https://i.pinimg.com/736x/4d/51/c9/4d51c91537b416a035b91917466243e1.jpg",
  "https://i.pinimg.com/736x/cc/20/ff/cc20ffa2906954b8c6d25e2fb32ad85a.jpg",
  "https://i.pinimg.com/736x/ee/58/83/ee58839c4e49b93ba02cd21b1b32ed56.jpg",
];

export default function ImageSlider() {
  return (
    <section className="w-full bg-black py-20 overflow-hidden flex justify-center items-center">
      <div className="relative flex w-[200%]">
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[250px] sm:min-w-[300px] md:min-w-[400px] h-[250px] sm:h-[300px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden shadow-[0_0_50px_#ff0000]"
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
