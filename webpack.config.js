const { root } = require('./webpack/utils')
const env = process.env.NODE_ENV
const prod = env === 'production'

const baseConfig = {
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: {
      '@service': root('src', 'contacts-service'),
      '@store': root('src', 'redux'),
      '@components': root('src', 'components'),
      '@styles': root('src', '_shared-styles'),
    },
  },
  module: { rules : require('./webpack/loaders') },
  plugins: require('./webpack/plugins')(env),
}

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://0.0.0.0:8090',
    'webpack/hot/only-dev-server',
    root('src', 'index.tsx'),
  ],
  performance: { hints: false },
}

const prodConfig = {
  mode: 'production',
  devtool: 'eval',
  entry: [ root('src', 'index.tsx') ],
  optimization: { minimize: true },
}

module.exports = Object.assign(
  {},
  baseConfig,
  prod ? prodConfig : devConfig
)
