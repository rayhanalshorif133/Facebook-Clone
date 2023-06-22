/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tuk-cdn.s3.amazonaws.com','developers.google.com','lh3.googleusercontent.com','robohash.org','rebrand.ly','links.papareact.com','platform-lookaside.fbsbx.com','firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
