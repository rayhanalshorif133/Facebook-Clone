/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org','rebrand.ly','links.papareact.com','platform-lookaside.fbsbx.com','firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
