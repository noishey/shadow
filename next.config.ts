import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shadow',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
