/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hydeparkwinterwonderland.com",
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
