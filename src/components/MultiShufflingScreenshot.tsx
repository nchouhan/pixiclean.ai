"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface MultiShufflingScreenshotProps {
  images: string[];
  alt: string;
  delay?: number;
  className?: string;
  shuffleInterval?: number;
}

export default function MultiShufflingScreenshot({ 
  images, 
  alt, 
  delay = 0, 
  className = "",
  shuffleInterval = 4000
}: MultiShufflingScreenshotProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, shuffleInterval);

    return () => clearInterval(interval);
  }, [shuffleInterval, images.length]);

  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Phone Frame */}
      <div className="relative w-64 h-[500px] mx-auto">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-6 text-white text-xs z-10">
              <span>21:58</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Content - Full Screen with Multi-Shuffling */}
            <div className="absolute inset-0">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage]}
                  alt={`${alt} - View ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </motion.div>
  );
}