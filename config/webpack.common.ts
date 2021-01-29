import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.join(__dirname, "../build"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }        
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { removeTitle: false }
                ],
                floatPrecision: 2,
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "index.html",
      inject: "body",
    }),
  ],
};

export default config;
