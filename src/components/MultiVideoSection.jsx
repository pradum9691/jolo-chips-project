import React, { useEffect, useState } from "react";

const videos = [
  { src: "https://jolochip.com/cdn/shop/videos/c/vp/aca1f3930d284f75a290aef80803af94/aca1f3930d284f75a290aef80803af94.HD-720p-4.5Mbps-61520740.mp4?v=0", duration: 5000 }, 
  { src: "https://jolochip.com/cdn/shop/videos/c/vp/72ffd3ab6073462e97cae0f64a67ea1b/72ffd3ab6073462e97cae0f64a67ea1b.HD-720p-4.5Mbps-62345112.mp4?v=0", duration: 7000 }, 
  { src: "https://jolochip.com/cdn/shop/videos/c/vp/49e5c75746fa47c894cfd8fd1f4b76ca/49e5c75746fa47c894cfd8fd1f4b76ca.HD-720p-4.5Mbps-62345148.mp4?v=0", duration: 6000 },
  { src: "https://jolochip.com/cdn/shop/videos/c/vp/d165e5e9b02e440a8d6dfc82551e9028/d165e5e9b02e440a8d6dfc82551e9028.HD-1080p-7.2Mbps-56065505.mp4?v=0", duration: 8000 }, 
];

export default function MultiVideoSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, videos[current].duration);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="w-full flex justify-center py-20 bg-black relative">
      <div className="w-[900px] h-[600px] sm:w-[1400px] sm:h-[600px] rounded-xl overflow-hidden shadow-[0_0_80px_#ff0000]">
        <video
          key={current}
          src={videos[current].src}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>

    </section>
  );
}
