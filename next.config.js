/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://www.thecocktaildb.com'],
  },
}

module.exports = nextConfig



