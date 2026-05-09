import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "*.trycloudflare.com", "192.168.2.18"
  ],
};

export default nextConfig;
