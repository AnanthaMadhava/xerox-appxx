const path = require("path");

let mode = "development";
let target = "web";

const ENV = process.env.NODE_ENV;

if(ENV === 'production'){
  mode = "production";
  target = "browserslist"
}

// console.log("ENV", ENV);
if (ENV === "development") {
  console.warn("This warning will dissapear on production build!");
}

const baseDir = path.resolve(__dirname, 'src');

//used to analyze which module is taking up space
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//compress the modules
const CompressionPlugin = require("compression-webpack-plugin");

var HTMLWebpackPlugin = require("html-webpack-plugin");

//minimize
var TerserPlugin = require("terser-webpack-plugin");

var baseConfig = {
  mode,
  entry: {
    main: path.resolve(baseDir,'index.js'),
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  devtool:'source-map',
  devServer: {
    hot:true,
    host: 'localhost',
    port: 3031,
    open: true,
    client: {
      overlay: false,
    },
    compress: true,
    hot: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        use: ["url-loader", "file-loader"],
      },
    ],
  },
  optimization: {
    minimize: !!(mode==='production'),
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            collapse_vars: true,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            safari10: true,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        }
      }
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CompressionPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = ({ mode } = { mode: "production" }) => baseConfig;
