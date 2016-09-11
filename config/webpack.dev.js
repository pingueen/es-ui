var merge = require('./helpers').merge;
var common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'source-map'
});