const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = {

  devtool : 'eval',

  entry: ["./src/js/app.js"],

  output: {
    path : path.resolve(__dirname, 'build'),
    publicPath : '/build/',
    filename: "js/bundle.js"
  },

  watch : true,
  
  module: {

    loaders: [
      {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015'] 
       }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  },


  plugins : [

    new CopyWebpackPlugin([
      {
        from : './src/css/',
        to   : './css/',
      },
      {
        from : './src/imgs/',
        to   : './imgs/',
      },
    ]),

  ]
}

module.exports = webpackConfig;