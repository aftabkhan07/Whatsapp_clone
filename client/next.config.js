/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1930347145,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "11df3c0ce851786569b21469f082f4ed",
  },
  images: {
    domains: ["localhost"], // to unrestrict UI from using server images put server address here
  },
};

module.exports = nextConfig;
