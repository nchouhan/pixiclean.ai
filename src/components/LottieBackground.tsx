"use client";

import Lottie from "lottie-react";
import animationData from "../Animation - 1745763736508.json";

interface LottieBackgroundProps {
  className?: string;
}

export default function LottieBackground({ className = "" }: LottieBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.3,
          filter: "blur(1px)",
        }}
      />
    </div>
  );
} 