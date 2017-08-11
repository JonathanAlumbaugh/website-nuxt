module.exports = {
  // Global CSS files
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/isotope.css',
    '~assets/css/custom.css'
  ],
  // Headers of the page
  head: {
    title: 'test',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'test'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Progress bar options
  loading: {
    color: '#00bfff',
    height: '2px'
  },

  // A man can hope
  build: {
    // vendor: ['vue-js-modal', 'vuebar']
    vendor: ['vueisotope', 'isotope-layout']
  },

  plugins: [
    // { src: '~plugins/v-img.js' }
    // { src: '~plugins/vue-js-modal.js' }
    // { src: '~plugins/vuebar.js', injectAs: 'vuebar', ssr: false }
    { src: '~plugins/isotope.js' }
  ],

  // Run ESLINT on save
  extend (config, ctx) {
    config.resolve.alias['masonry'] = 'masonry-layout'
    config.resolve.alias['isotope'] = 'isotope-layout'
    //  if (ctx.dev && ctx.isClient) {
    //    config.module.rules.push({
    //      enforce: 'pre',
    //      test: /\.(js|vue)$/,
    //      loader: 'eslint-loader',
    //      exclude: /(node_modules)/
    //    })
    //  }
  }
}
