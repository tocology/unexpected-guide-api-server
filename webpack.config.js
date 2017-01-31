const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: path.resolve(__dirname, 'server.js'),
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    root      : [path.resolve(__dirname, '')],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs'
  },
  // externals: [
  //   /^(?!\.|\/).+/i
  // ]
  externals : nodeModules
}
