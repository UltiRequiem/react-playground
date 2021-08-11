/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')

const Dotenv = require('dotenv-webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './index.js',
  output: {
    path: fm('dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'development',
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
    contentBase: fm('dist'),
    compress: false,
    port: 3000,
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
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new FaviconsWebpackPlugin(fm('./public/favicon.ico')),

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
