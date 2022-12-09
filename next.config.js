module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "cdn.simpleicons.org", "cdn.shopify.com"],
    remotePatterns: [
      { hostname: "cdn.simpleicons.org" },
      { hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-robots-tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ]
  },
}