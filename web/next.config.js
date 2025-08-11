/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ['www.CarwashTechnologies.com'], // Add your image domains here
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
}

module.exports = nextConfig