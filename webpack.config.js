module.exports = {
    entry: {
        app: './js/app.js'
    },
    output: {
        path: __dirname + '/js/build',
        filename: '[name].js',
        publicPath: '/js/build/'
    }
};