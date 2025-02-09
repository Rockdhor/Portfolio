import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  images: {
    unoptimized: true
  },
  title: "allen schmerler | portfolio",
  description: "Software Engineer Allen Schmerler's Portfolio",
};

export default nextConfig;
