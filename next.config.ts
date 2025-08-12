import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: false,

  async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://talktodo-server-production.up.railway.app/:path*' }];
  },
};

export default nextConfig;
