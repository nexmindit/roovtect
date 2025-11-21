import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "roovtect.com",
      },
      {
        protocol: "https",
        hostname: "smartquote.roovtect.com",
      },
    ],
  },
};

export default nextConfig;
