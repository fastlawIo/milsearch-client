const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const TSLoader = require.resolve('ts-loader');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        'index': path.resolve(__dirname, '../index.ts'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.js$/
        })],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        library: {
            name: 'milsearch-lib',
            type: 'umd',
        },
        filename: '[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: TSLoader,
                options: {
                    onlyCompileBundledFiles: true,
                },
                exclude: [/node_modules/, /examples/],
            }
        ],
    }
};
