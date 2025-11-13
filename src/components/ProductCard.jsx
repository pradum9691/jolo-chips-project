import React from "react";
import { motion } from "framer-motion";

const productData = [
  {
    id: 1,
    name: "Jolochip 1pc",
    price: "₹199",
    image:
      "https://images.othoba.com/images/thumbs/0677337_jolochip-hottest-chip-madness-last-chip-challenge-jolo-chip-1-pcs.webp",
  },
  {
    id: 2,
    name: "Jolochip Combo",
    price: "₹399",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2022/3/IG/TF/KC/104745415/product-jpeg-1000x1000.jpg",
  },
  {
    id: 3,
    name: "Jolochip Hoodie",
    price: "₹899",
    image:
      "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/618DSfE_FWL.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-black text-white py-20 px-4 sm:px-8 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
      >
        🔥 Our Products 🔥
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            className="bg-linear-to-b from-gray-900 to-black p-5 rounded-2xl shadow-xl text-center flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-red-400 text-base sm:text-lg md:text-lg mb-4">{item.price}</p>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base md:text-base">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
