
const path = require('path');
module.exports = {
    entry: "./src/js/script2.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/, exclude: /node-module/, use: ['babel-loader']
            },
            {
                test: /\.jpg$/, use: ['url-loader']
            }
        ]
    },
    mode: "production"
    
}