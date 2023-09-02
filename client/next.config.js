/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"], // to unrestrict UI from using server images put server address here
  },
};

module.exports = nextConfig;
