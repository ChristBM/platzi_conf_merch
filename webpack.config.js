const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.resolve( __dirname, 'src/assets' ),
      '@components': path.resolve( __dirname, 'src/components' ),
      '@containers': path.resolve( __dirname, 'src/containers' ),
      '@contexts': path.resolve( __dirname, 'src/contexts' ),
      '@hooks': path.resolve( __dirname, 'src/hooks' ),
      '@layouts': path.resolve( __dirname, 'src/layouts' ),
      '@pages': path.resolve( __dirname, 'src/pages' ),
      '@routes': path.resolve( __dirname, 'src/routes' ),
      '@styles': path.resolve( __dirname, 'src/styles' ),
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.woff2$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(svg|png|jpg|webp)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[hash][ext][query]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new Dotenv({
      path: './.env',
      safe: true
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
}