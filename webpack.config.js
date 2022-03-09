const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !==  'production';

module.exports = {
mode: isDevelopment ? 'development' : 'production',
devtool: isDevelopment ? 'eval-source-map': 'source-map',
entry: path.resolve(__dirname, 'src', 'index.jsx'),
output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
},
plugins:[
    new htmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })
],
resolve:{
    extensions:['.js', '.jsx']
},
module:{
    rules:[
        {
            test:/\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test:/\.scss$/,
            exclude:/node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ]
        }
    ]
    
},
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}