module.exports = {
    entry: {
        app: './js/app.js'
    },
    output: {
        path: __dirname + '/js/build',
        filename: '[name].js',
        publicPath: '/js/build/'
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ] },
            { test: /\.html$/, use: 'html-loader' }
        ]
    }
};