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
      {
        source: '/maintenance',
        destination: '/guides/garage-maintenance-checklist',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
