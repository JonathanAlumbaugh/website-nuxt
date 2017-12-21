import { imageminLoader, ImageminWebpackPlugin } from 'imagemin-webpack'

export default {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader' // Or `url-loader`.
          },
          {
            loader: imageminLoader,
            options: {
              plugins
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Make sure that the plugin is after any plugins that add images.
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins
      }
    })
  ]
}
