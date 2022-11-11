/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Required:
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;