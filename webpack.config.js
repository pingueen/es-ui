module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: 'raw!less'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.html', '.less'],
        root: './src/'
    },
    devtool: 'source-map'
};