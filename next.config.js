/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["sk", "cz"],
    defaultLocale: "cz",
  },
  images: {
    domains: ["d35xwkx70uaomf.cloudfront.net"],
    formats: ["image/avif", "image/webp"],
  },
};
