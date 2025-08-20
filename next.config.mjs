/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: API_URL,
  },
};

export default nextConfig;
