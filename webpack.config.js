"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",

  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js"
  },

  module: {
    rules: [ {
      test: /\.css$/,
      use: [
        'style-loader',
        'resolve-url-loader', 
        'css-loader',
        'postcss-loader',
      ],
    },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};