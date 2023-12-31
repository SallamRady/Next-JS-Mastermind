/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URL: "mongodb://localhost:27017/next-blog",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
