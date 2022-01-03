const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',

    output: {
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [/[\\/]node_modules[\\/]/],
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                exclude: [/[\\/]node_modules[\\/]/],
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    devServer: {
        port: 3000,
        disableHostCheck: true,
        open: true,
    },

})
