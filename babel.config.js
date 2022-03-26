const isDevelopment = process.env.NODE_ENV === 'development';
const plugins = ['@emotion'];

if (isDevelopment) {
  plugins.push('react-refresh/babel');
}
module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
          node: true,
        },
      },
    ],
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins,
  env: {
    production: {
      presets: ['minify'],
    },
  },
};
