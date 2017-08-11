module.exports = {
  // Global CSS files
  css: [
    '~assets/css/bootstrap.min.css', '~assets/css/custom.css',
  ],
  // Headers of the page
  head: {
    title: 'test',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      }, {
        hid: 'description',
        name: 'description',
        content: 'test',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      }
    ],
  },

  // Progress bar options
  loading: {
    loading: 'green',
    height: '2px',
  },

  // Build configuration
  build: {
    vendor: [
      // 'slideoutNav'
      // 'vuebar',
      //   '~plugins/isotope.pkgd.js'
    ],

    // Run ESLINT on save
    extend( config, ctx ) {
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
  },
}
