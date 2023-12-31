const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Progress = require('webpack').ProgressPlugin;

module.exports = {
    mode: 'development',
    entry: {
        styles: ['./src/assets/styles.css'],
        index: ['./src/index.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx|mjs|js)?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new Progress(),
    ],
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
