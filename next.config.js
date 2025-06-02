const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/knights-tour' : '',
  assetPrefix: isProd ? '/knights-tour/' : '',
  trailingSlash: true,
};
