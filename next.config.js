/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
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
