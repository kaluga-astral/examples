const withTM = require('next-transpile-modules')(['@astral/ui']);

module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: true },
  headers() {
    return [
      {
        source: "/_assets/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate",
          },
        ],
      },
    ];
  },
})
