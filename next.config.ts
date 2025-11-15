import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // other config options here
  turbopack: {
    root: __dirname, // or the absolute path to your project root
  },
};

export default nextConfig;
