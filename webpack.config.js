module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].min.js',
  },
};
