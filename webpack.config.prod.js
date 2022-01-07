const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry:
        path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|pdf)$/i,
                loader: 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        open: true,
        port: 3000
    },
};