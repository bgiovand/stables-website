module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "cdn.simpleicons.org"],
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