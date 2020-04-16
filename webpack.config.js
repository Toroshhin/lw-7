const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: { compact: true },
        exclude: '/node_modules/'
    },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}
