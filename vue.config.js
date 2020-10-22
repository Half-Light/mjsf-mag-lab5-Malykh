module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
      ],
    },
  }
}
