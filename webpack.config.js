const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    module: {
      rules: [
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
          }
      ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'template.html'),
        }),
    ],
}
