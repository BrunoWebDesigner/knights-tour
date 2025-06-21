const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
