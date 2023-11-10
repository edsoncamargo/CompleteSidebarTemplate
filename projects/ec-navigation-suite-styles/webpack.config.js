const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputPath = path.resolve(
  __dirname,
  "../../dist/ec-navigation-suite/styles/"
);

const pkg = require("./package.json");
const projectName = pkg.name;
const projectVersion = pkg.version;

module.exports = {
  entry: "./src/styles.scss",
  output: {
    filename: "does-not-matter.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${projectName}.${projectVersion}.css`,
    }),
  ],
};
