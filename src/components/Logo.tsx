"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 80 }: LogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Image
        src="/images/icons/logo-min.png"
        alt="PixieClean Logo"
        width={size}
        height={size}
        className="rounded-2xl shadow-lg"
        priority
      />
    </motion.div>
  );
} 