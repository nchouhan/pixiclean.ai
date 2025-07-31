"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AppScreenshotProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  width?: number;
  height?: number;
}

export default function AppScreenshot({ 
  src, 
  alt, 
  delay = 0, 
  className = "",
  width = 256,
  height = 500
}: AppScreenshotProps) {
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
      <div className={`relative w-${width/16} h-[${height}px] mx-auto`}>
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-6 text-white text-xs">
              <span>21:58</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="absolute inset-0 pt-6">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover rounded-[1.5rem]"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </motion.div>
  );
} 