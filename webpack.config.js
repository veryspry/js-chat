const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = environment => {
  // defaults to production values
  let envPath = path.join(__dirname, ".env");
  // set NODE_ENV in development mode

  if (
    environment &&
    environment.NODE_ENV &&
    environment.NODE_ENV == "development"
  ) {
    envPath = path.join(__dirname, ".env.development");
  }

  const env = dotenv.config({ path: envPath }).parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: ["@babel/polyfill", path.join(__dirname, "src/index.js")],
    output: {
      filename: "bundle.js",
      // path: path.join(__dirname, "dist"),
      path: path.join(__dirname, "../prod/build"),
      publicPath: "/"
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000,
      hot: false,
      open: false,
      overlay: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
        favicon: path.join(__dirname, "public/favicon.ico")
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
