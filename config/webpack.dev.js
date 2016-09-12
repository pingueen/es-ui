const webpackMerge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = webpackMerge(common, {
    devtool: 'source-map'
});