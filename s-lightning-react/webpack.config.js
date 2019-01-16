const path = require("path");
const webpack = require("webpack");

module.exports = {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader'
            }
          ]
        },
        {
				test: /\.(eot|woff|woff2|ttf)$/,
				loader: 'url-loader?limit=100000',
			  },
        {
          loader: "babel-loader",
          test: /\.js?$/,
          exclude: /node_modules/
        },
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        }
      ]
    }
};