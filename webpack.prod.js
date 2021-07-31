const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'parse-html.js',
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                exclude: [/[\\/]node_modules[\\/]/],

                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },

            {
                test: /\.less$/i,
                exclude: [/[\\/]node_modules[\\/]/],
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },

        ],
    },
    plugins: [new MiniCssExtractPlugin()],

})
