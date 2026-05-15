import type { NextConfig } from "next";

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  distDir: "out",
  reactCompiler: true,
  reactStrictMode: true,

  allowedDevOrigins: ["*.trycloudflare.com", "192.168.2.18"],

  images: {
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

export default withBundleAnalyzer(nextConfig);

// export default nextConfig;
