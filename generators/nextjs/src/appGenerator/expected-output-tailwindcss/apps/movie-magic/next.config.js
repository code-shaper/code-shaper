/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['.'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
