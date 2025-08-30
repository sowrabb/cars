import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/cars',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
