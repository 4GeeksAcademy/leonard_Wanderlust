import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "media.tacdn.com",
      },
      {
        protocol: "https",
        hostname: "dynamic-media.tacdn.com",
      },
    ],
  },
};

export default nextConfig;
