/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      // Ajout pour votre domaine de production
      {
        protocol: "https",
        hostname: "doxu.fr",
        pathname: "/media/**",
      },
      // Si votre API backend est sur un autre domaine
      {
        protocol: "https",
        hostname: "doxu-backend.onrender.com",
        pathname: "/media/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  },
};

module.exports = nextConfig;
