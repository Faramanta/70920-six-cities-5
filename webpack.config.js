const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ['file-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Review: path.resolve(__dirname, './src/components/review/'),
      Props: path.resolve(__dirname, './src/utils/prop-types/')
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
    }),
  ],
};
