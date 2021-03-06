const path = require('path');
const baseUrl = "./flux/";

const config = {
  entry: baseUrl+ "entry.jsx",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "bundle.js"
  },
  module:{
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query:{
          presets: ["es2015","react"]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}

module.exports = config;