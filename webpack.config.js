const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        proxy: { "/api/**": { target: 'http://localhost:5000', secure: false }  }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]
};