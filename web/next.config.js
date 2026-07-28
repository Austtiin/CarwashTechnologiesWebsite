const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  turbopack: {},
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.resolve(__dirname, 'node_modules/tailwindcss'),
    };
    if (dev) {
      config.cache = { type: 'memory' };
    }
    return config;
  },
}

module.exports = nextConfig