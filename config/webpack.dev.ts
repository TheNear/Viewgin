import webpack from "webpack";
import { merge } from "webpack-merge";
import defaultConfig from "./webpack.common";

export default merge(defaultConfig, {
  mode: "development",
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})