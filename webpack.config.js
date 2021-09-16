const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/util.ts',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'util.js',
    libraryTarget: 'umd',
  },
  resolve: {
    // 加载文件没指定扩展名时找以下扩展名
    extensions: ['.ts','.tsx','.js','.json']
  },
  module: {
    rules:[
      {
        test: /\.(j|t)sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  }
}