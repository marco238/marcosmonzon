const webpack = require('webpack');
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.ProgressPlugin(),
  new HTMLWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }
  })
];

module.exports = ({ mode }) => {
  return webpackMerge(modeConfig({mode}), {
    mode,
    resolve: {
      extensions: ['.js']
    },
    entry: {
      'app-shell': ['./src/app-shell.js']
    },
    output: {
      path: resolve(__dirname, 'dist/'),
      filename: '[name].bundle.js'
    },
    plugins
  })
}