import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  reactCompiler: true,

  allowedDevOrigins: ["*.trycloudflare.com", "192.168.2.18"],

  images: {
    domains: ["images.unsplash.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },
};

export default nextConfig;
