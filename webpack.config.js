const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  // entry: [ path.resolve(__dirname, 'server.js'), models ],
  entry: glob.sync(path.resolve(__dirname, 'src/**/*.js')),
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    root      : [path.resolve(__dirname, '')],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modulesDirectories: ['node_modules']
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
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, ''),
      verbose: true,
      dry: false,
      exclude: [],
      watch: true
    })
  ],
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  externals: [nodeModules],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.[chunkhash].js',
    libraryTarget: 'commonjs'
  }
}
