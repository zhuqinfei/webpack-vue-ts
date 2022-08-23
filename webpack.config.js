const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.ts',
  mode:'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {  //新增别名
      'vue': 'vue/dist/vue.esm.js'
    },
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {   //新增
          esModule: true,
      }
      },
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader",
        options: {   //新增
          appendTsSuffixTo: [/\.vue$/]
       }
      }  
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};