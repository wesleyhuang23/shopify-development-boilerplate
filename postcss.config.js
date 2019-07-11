const plugins = [
  require('autoprefixer'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));

  plugins.push(require('postcss-discard-comments')({
    removeAll: true,
  }));
}

module.exports = {
  plugins,
};
