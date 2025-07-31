"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

interface PlaceholderScreenshotProps {
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export default function PlaceholderScreenshot({ 
  title, 
  description, 
  delay = 0, 
  className = "" 
}: PlaceholderScreenshotProps) {
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
          <div className="absolute inset-2 bg-gradient-to-br from-purple-900 via-black to-blue-900 rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black/50 backdrop-blur-sm flex items-center justify-between px-6 text-white text-xs">
              <span>21:58</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="absolute inset-0 pt-6 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
                <div className="mt-4 text-xs text-gray-400">
                  Add screenshot to: <br />
                  <code className="bg-gray-800 px-2 py-1 rounded">public/images/screenshots/</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </motion.div>
  );
} 