/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.haris-instal.pl',
        port: '',
        pathname: '/admin/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
