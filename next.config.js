/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com'],
  },
  env: {
    API_URI: process.env.API_URI,
  }
}

module.exports = () => {
  return nextConfig
}

