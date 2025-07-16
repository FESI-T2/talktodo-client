import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: false,
};

export default nextConfig;
