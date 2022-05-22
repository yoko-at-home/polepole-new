/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io", "encrypted-tbn0.gstatic.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    disable: isProd ? false : true,
    sw: "service-worker.js",
  },
});
