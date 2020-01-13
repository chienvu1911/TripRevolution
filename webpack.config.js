const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");  

module.exports = {
    // define entry file and output
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    // define babel loader
    module: {
        rules: [
           { 
               test: /\.jsx?$/, 
               loader: 'babel-loader', 
               exclude: /node_modules/ 
           },
           {  
               test: /\.css$/,  
               use: ["style-loader", "css-loader"]  
           },
           {  
                test: /\.scss$/,  
                use: ['style-loader', 'css-loader', 'sass-loader']    
           }                        
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [  
        new HtmlWebpackPlugin({  
        	template: "./public/index.html"  
        })  
    ]  
};