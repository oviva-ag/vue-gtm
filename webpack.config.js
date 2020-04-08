const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'dist/vue-gtm.min.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: [ '.js', '.json' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-2' ]
        },
        exclude: /node_modules/
      }
    ]
  }
}
