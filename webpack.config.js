const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const isDevelopment = mode === "development";

module.exports = {
  mode,
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    chunkFilename: "[name].[id].js"
  },
  devtool: isDevelopment ? "source-map" : false,
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte")
    },
    extensions: [".js", ".svelte"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "Siddhant's Website"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
