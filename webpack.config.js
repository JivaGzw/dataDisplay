var webpack = require('webpack');

module.exports = {
  entry: {
    ReactApp: './views/script/react-app.js',
    vendor: ["react", "react-dom", "react-router", "jquery", "semantic-ui/dist/semantic.js", "./public/echarts-2.2.7/build/dist/echarts-all.js", "pubsub-js"]
  },
  output: {
    path: './build',
    publicPath: './build',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "common.js"),
    new webpack.ProvidePlugin({
      $ : 'jquery',
      jQuery: 'jquery'
    }),//使jquery成为全局变量，其他文件中不用再require('jquery')。
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader?harmony'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};