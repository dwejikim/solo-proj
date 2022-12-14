const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {


    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        host: 'localhost',
        port: 8080,
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
                
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                ]
            }
        ]
    }

}