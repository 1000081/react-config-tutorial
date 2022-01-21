const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: './dist',
    static: './',
  },
  module: {
    rules: [
    {
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      //use: ['babel-loader', 'eslint-loader'],
      use: ['babel-loader']
    }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ]

};