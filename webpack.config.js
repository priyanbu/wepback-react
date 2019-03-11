var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader']
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000
                }
              }
            ]
          }
    
    
    ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/public/index.html')})
    ]
}