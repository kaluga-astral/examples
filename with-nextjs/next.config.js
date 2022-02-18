const withTM = require('next-transpile-modules')(['@astral/ui']);

module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: true },
})
