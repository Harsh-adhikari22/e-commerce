/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dctahvizk",
    NEXT_PUBLIC_API: "app-61711.on-aptible.com",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "pngimg.com",
      "png.pngitem.com",
      "spng.pngfind.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
