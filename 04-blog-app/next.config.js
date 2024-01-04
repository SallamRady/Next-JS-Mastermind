/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URL: "mongodb://127.0.0.1:27017/next-blog",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
