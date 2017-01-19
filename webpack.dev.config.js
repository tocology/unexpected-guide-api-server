const path = require("path")
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'server/main.ts'),
    'webpack-dev-server/client?http://0.0.0.:3001',
    'webpack/hot/only-dev-server'
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  devServer: {
    hot: true,
    filename: 'server.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
      '**': 'http://localhost:3000'
    }
  },
  target: 'node',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
}
