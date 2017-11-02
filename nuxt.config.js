// !-------------------------------------------------------------------------!
// Idk if this works much less anything else
// !-------------------------------------------------------------------------!
// const webpack = require('webpack')
// !-------------------------------------------------------------------------!
// This is for putting shit in another (i.e. src) folder
// !-------------------------------------------------------------------------!
const { resolve } = require('path')

module.exports = {
  // !-------------------------------------------------------------------------!
  // Change src directory
  // !-------------------------------------------------------------------------!
  srcDir: resolve('./src'),

  plugins: [
    // !-------------------------------------------------------------------------!
    // Hack solution: include all the stuff that isn't working as JS where
    // Webpack doesn't get a chance to touch it, then fix it later so there's at
    // least something online.
    // GO TO HEAD TAG AND REMOVE THAT SHIT WHEN YOU FIX THIS
    // !-------------------------------------------------------------------------!
    // { src: '~plugins/vuebar.js', ssr: false }
    // { src: '~plugins/isotope.js' }
    // { src: '~plugins/jquery.fancybox.js', ssr: false }
    { src: '~plugins/vue-sticky.js' },
    { src: '~plugins/vue-js-modal.js' },
    { src: '~plugins/ga.js', ssr: false }
  ],

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

  css: [
    // !-------------------------------------------------------------------------!
    // Can I ditch Bootstrap?
    // !-------------------------------------------------------------------------!
    // '~assets/css/bootstrap.min.css',
    '~assets/css/normalize.css',
    '~assets/css/layout.css',
    '~assets/css/isotope.css',
    '~assets/css/custom.css',
    '~assets/css/animate.css',
    // !-------------------------------------------------------------------------!
    // Fix so that you don't include this on every page, only the ones that need it
    // !-------------------------------------------------------------------------!
    '~assets/css/jquery.fancybox.css'
  ],

  head: {
    title: '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        name: 'author',
        content: 'Jonathan Alumbaugh'
      },
      {
        hid: 'default HID description',
        name: 'default description',
        content: 'default content'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon/favicon.ico'
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

  loading: {
    // !-------------------------------------------------------------------------!
    // Progress bar options.
    // !-------------------------------------------------------------------------!
    color: '#00bfff',
    height: '2px'
  },

  router: {
    // !-------------------------------------------------------------------------!
    // Make this smooth scroll?
    // !-------------------------------------------------------------------------!
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Run ESLINT on save
  extend (config, ctx) {
    // !-------------------------------------------------------------------------!
    // This shit will never work and I don't really want it to anymore
    // !-------------------------------------------------------------------------!
    // config.resolve.alias['masonry'] = 'masonry-layout'
    // config.resolve.alias['isotope'] = 'isotope-layout'
    // !-------------------------------------------------------------------------!
    // This is the terrible linter that runs on save it's so strict.
    // !-------------------------------------------------------------------------!
    //  if (ctx.dev && ctx.isClient) {
    //    config.module.rules.push({
    //      enforce: 'pre',
    //      test: /\.(js|vue)$/,
    //      loader: 'eslint-loader',
    //      exclude: /(node_modules)/
    //    })
    //  }
    // !-------------------------------------------------------------------------!
  }
}
