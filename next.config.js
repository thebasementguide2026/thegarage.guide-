/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/articles/complete-garage-organization-guide',
        destination: '/guides/complete-garage-organization-guide',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
