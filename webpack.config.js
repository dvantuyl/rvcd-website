const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  entry: path.resolve(__dirname, 'src/assets/scripts/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'events.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },
    ],
  },
}
