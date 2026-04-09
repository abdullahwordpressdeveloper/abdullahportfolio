import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Helps with SVG/public asset preloads
  },
  experimental: {
    optimizePackageImports: ['geist'],
  },
  turbopack: {},
};

export default nextConfig;
