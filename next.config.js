/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  // output: "export",
  images: {
    unoptimized: true,
  },
  // i18n: {
  //   locales: ["ru", "uz", "en"],
  //   defaultLocale: "ru",
  //   localeDetection: false,
  // },
};

module.exports = nextConfig;
