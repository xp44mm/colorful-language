const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/[\\/]node_modules[\\/]/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { babelrc: true },
                    },
                ],
            },
            {
                test: /\.html$/,
                exclude: [/[\\/]node_modules[\\/]/],
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: [/[\\/]node_modules[\\/]/],
                type: 'asset',
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
}
