import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configure for different environments
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS && {
    // GitHub Pages with custom domain
    assetPrefix: 'https://ocars.app',
    basePath: '',
  }),
  ...(process.env.NODE_ENV === 'production' && !process.env.GITHUB_ACTIONS && {
    // GitHub Pages without custom domain (fallback)
    basePath: '/cars'
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
