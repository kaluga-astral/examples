// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const withTM = require('next-transpile-modules')([
  '@example/ui',
  '@astral/ui',
  '@example/static',
]);

const svgReactLoader = () => ({
  test: new RegExp(`icons\\${path.sep}.*\\.svg$`, 'i'),
  resourceQuery: /component/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgProps: { fill: 'currentColor' },
        options: {
          // данные props прокидываются в mui icon. Сделано для совместимости
          svgProps: {
            fill: 'currentColor',
            width: '1em',
            height: '1em',
          },
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
});

const modifyWebpackConfig = (config) => {
  const additionalLoaders = [
    svgReactLoader(),
    {
      test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
      exclude: new RegExp(`icons\\${path.sep}.*\\.svg$`, 'i'),
      type: 'asset/resource',
    },
  ];
  const additionalConfig = {};

  const mergedConfig = merge(config, additionalConfig);

  mergedConfig.module.rules = config.module.rules.concat(additionalLoaders);

  return mergedConfig;
};

module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: true },
  webpack: modifyWebpackConfig,
  images: {
    disableStaticImages: true,
  },
});
