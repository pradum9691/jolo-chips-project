import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/ProductCard.jsx";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar.jsx";
import RotatingImage from "./components/ImageSlider.jsx";
import VideoSection from "./components/MultiVideoSection.jsx";

export default function App() {
  return (
    <div className="font-sans bg-black overflow-x-hidden text-white">
      <ScrollBar />
      <Navbar />
      <Hero />
      <VideoSection />
      <RotatingImage />
      <Products />
      <Footer />
    </div>
  );
}
