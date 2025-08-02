import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.slothino.com',
      },
    ],
  },
};

export default nextConfig;
