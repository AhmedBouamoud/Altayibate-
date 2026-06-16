/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Altayibate-",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
