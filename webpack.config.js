var webpack = require('webpack')

module.exports = {
    entry: [
        './jsx/routes.jsx'
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loaders: ['react-hot', 'babel-loader']
        }]
    }
};
