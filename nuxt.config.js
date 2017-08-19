// Idk if this works much less anything else
// const webpack = require('webpack')

module.exports = {
  // PLUGINS FUCK
  plugins: [
    // !-------------------------------------------------------------------------!
    // Hack solution: include all the stuff that isn't working as JS where
    // Webpack doesn't get a chance to touch it, then fix it later so there's at
    // least something online.
    // GO TO HEAD TAG AND REMOVE THAT SHIT WHEN YOU FIX THIS
    // !-------------------------------------------------------------------------!
    // { src: '~/plugins/jquery.fancybox.js', ssr: false },
    // { src: '~plugins/vuebar.js', ssr: false }
    // { src: '~plugins/isotope.js' }
    // { src: '~plugins/jquery.fancybox.js', ssr: false }
    // { src: '~plugins/vue-js-modal.js' },
    { src: '~plugins/ga.js', ssr: false }
  ],

  // BUILDERS Dear god why won't it work
  build: {
    // !-------------------------------------------------------------------------!
    // If shit worked this could make jQery work but I have no idea what the
    // fuck is going on haha.
    // !-------------------------------------------------------------------------!
    // vendor: ['jquery'],
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   })
    // ]
    // !-------------------------------------------------------------------------!
    // Vendor is everything that needs to be client side or something like that
    // Window or Document undefined?
    // This is due to the server-side rendering. If you need to specify that you
    // want to import a resource only on the client-side, you need to use the
    // process.browser variable.
    // https://nuxtjs.org/faq/window-document-undefined/
    // !-------------------------------------------------------------------------!
    // vendor: ['vueisotope', 'isotope-layout', 'vue-js-modal', 'vuebar']
    // !-------------------------------------------------------------------------!
    // loaders: [
    //   {
    //     test: require.resolve('jquery'),
    //     loader: 'expose?$'
    //   }
    // ],
  },

  // Global CSS files
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/isotope.css',
    '~assets/css/custom.css',
    // Fix so that you don't include this on every page, only the ones that need it
    '~assets/css/jquery.fancybox.css'
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
    ],
    script: [
      // !-------------------------------------------------------------------------!
      // Super shitty plugin-in fallback method, just using scripts in the head.
      // If I do this I'm going to have to use multiple layouts which I'd really
      // rather not do because I like the cleanliness of using one layout and having
      // automatic built-in page transitions.
      // !-------------------------------------------------------------------------!
      { src: '/js/jquery.js' },
      { src: '/js/jquery.fancybox.js' }
    ]
  },

  // Progress bar options
  loading: {
    color: '#00bfff',
    height: '2px'
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Run ESLINT on save
  extend (config, ctx) {
    // config.resolve.alias['masonry'] = 'masonry-layout'
    // config.resolve.alias['isotope'] = 'isotope-layout'
    //  if (ctx.dev && ctx.isClient) {
    //    config.module.rules.push({
    //      enforce: 'pre',
    //      test: /\.(js|vue)$/,
    //      loader: 'eslint-loader',
    //      exclude: /(node_modules)/
    //    })
    //  }
  }

  // Just me fucking around with the output dir
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   publicPath: '/dist',
  //   filename: 'bundle.js'
  // }
}
