/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  // autres configurations
  async rewrites() {
    return [
      {
        source: '/edit/:artist',
        destination: '/edit/[artist]',
      },
    ];
  },
};
