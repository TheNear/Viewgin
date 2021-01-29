import { merge } from "webpack-merge";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import defaultConfig from "./webpack.common";

export default merge(defaultConfig, {
  mode: "production",
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})