const webpackMerge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = webpackMerge(common, {
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /\.test\.js$/,
                loader: 'istanbul-instrumenter'
            }
        ]
    },
    devtool: 'source-map'
});