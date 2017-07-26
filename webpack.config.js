
// Webpack does three things --
    // 1) webpack needs to know the starting point of your application, or your root JavaScript file.

    // 2) webpack needs to know which transformations to make on your code.
        // a. the steps for including more loaders is pretty basic. NPM install the specific loader then add a new object to the rules array.

    // 3) webpack needs to know to which location it should save the new transformed code.
        //a. path is the specific directory where the new filename (index_bundle.js) is going to be placed.
        // b. filename is the name of the file that webpack is going to create which contains our new transformed code.

var path = require('path'); // this automatically comes with webpack, a bunch of utilities for working with the file-directory
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


var config = {
    entry:['babel-polyfill', './app/index.js'],  // <<< 1
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
      module: { // <<< 2
          rules: [  // <<< 2 a.
              {test: /\.(js)$/, use: 'babel-loader'},
              {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
              {test: /\.svg$/, use: ['file-loader']}
          ]
      },
      devServer : {
          historyApiFallback: true
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: 'app/index.html'
          })
  ]
          // whenever webpack runs, our /app/index.html gets copied over to /dist/index.html
        // HTML in dist (which was created with HTMLWebpackPlugin) now has a script tag pointing to index_bundle.js

};

module.exports = config;

// (After updating the package.json file to include under "scripts:" property the "build" property) Now in your terminal you can run "npm run build" which will do a one time run through of your settings then compile your code and output into a dist folder. However, this can be kind of a pain to keep having to run the command over and over whenever you change anything. To fix this, change webpack in your NPM script to run webpack -w and that will watch your files and re-execute webpack whenever any of the files Webpack is concerned about changes. Lastly, if you're wanting to ship to production, you can run webpack -p and that will run through the normal transformations as well as minify your code (we'll do this in the last video of the course).
