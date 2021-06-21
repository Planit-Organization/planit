const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "./build/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            // plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/client/index.html",
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "/client"),
    // compress: true,
    // port: 3000,
    publicPath: "/build",
    proxy: {
      "/**": "http://localhost:3000",
    },
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
};
