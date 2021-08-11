/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const LicensePlugin = require('webpack-license-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './index.js',
  output: {
    path: fm('dist'),
    filename: '[name].[contenthash].js',
  },
  mode: 'production',
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
    new CleanWebpackPlugin(),

    new FaviconsWebpackPlugin(fm('./public/favicon.ico')),
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new FaviconsWebpackPlugin(fm('./public/favicon.ico')),
    new LicensePlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
}
