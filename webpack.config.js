const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js' 
}, // точка входа для начала сборки приложения
    mode: 'development', // production (собирается дольше, но весит меньше, development собирается быстрее)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/about',
        assetModuleFilename: 'assets/[hash][ext][query]'
    }, // директория куда будет перемещено все собранное
    plugins: [
        new HtmlWebpackPlugin ()
    ],
    module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg)$/,
            type: 'asset/resource'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
          }
        ]
      },
} 