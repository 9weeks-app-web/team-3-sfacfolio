/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  // 임시로 설정
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
};

module.exports = nextConfig;
