const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devServer: {
    port: 4000,
    open: true,
    contentBase: path.resolve(__dirname, 'dist/pages'),
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'pages/index.html',
      template: './pages/main.njk',
      templateParameters: {},
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].min.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images/[name][ext]'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.(njk)$/, /\.(html)$/],
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              searchPaths: [path.resolve(__dirname, 'src/pages/PARTS')],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // to-left<---from right
      },
    ],
  },
};
