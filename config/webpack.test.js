var merge = require('./helpers').merge;
var common = require('./webpack.common');

module.exports = merge(common, {
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