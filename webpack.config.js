const webpack = require('webpack');
const env = require('dotenv').config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

  // loaders: [
  //   {
  //     test: /\.(png|jpg)$/,
  //     loader: 'url?limit=25000'
  //   }
  // ],
  
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
}
