module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.less$/, loader: 'raw!less'}
        ]
    },
    resolve: {
        root: './src/',
        extensions: ['', '.js', '.html', '.less'],
        alias: {
            component: 'lib/component',
            extend: 'lib/extend'
        }
    }
};
