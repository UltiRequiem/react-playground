/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config()

const path = require('path')

const Dotenv = require('dotenv-webpack')
const LicensePlugin = require('webpack-license-plugin')
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
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: require.resolve('browserify-fs'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      https: require.resolve('http-browserify'),
      zlib: require.resolve('browserify-zlib'),
      vm: require.resolve('vm-browserify'),
    },
    alias: {
      fs: require.resolve('browserify-fs'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      vm: require.resolve('vm-browserify'),
      https: require.resolve('http-browserify'),
    },
  },
  devServer: {
    contentBase: config.DIST,
    compress: config.COMPRESS,
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

    new Dotenv({
      path: './.env',
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
}
