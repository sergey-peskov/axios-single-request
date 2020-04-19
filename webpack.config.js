module.exports = {
  entry: './src/index.ts',
  context: __dirname,
  output: {
    libraryTarget: 'umd',
    library: 'axiosSingleRequest',
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};