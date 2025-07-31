import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
