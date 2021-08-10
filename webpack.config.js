/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config()

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  PORT: Number(process.env.PORT),
  COMPRESS: process.env.MODE === 'development',
  MODE: process.env.MODE,
  DIST: path.join(__dirname, 'dist'),
}

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './index.js',
  output: {
    path: config.DIST,
    filename: 'main.js',
  },
  mode: config.MODE,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: config.DIST,
    compress: process.env.MODE === 'development',
    port: config.PORT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
