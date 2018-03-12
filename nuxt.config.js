// !-------------------------------------------------------------------------!
// This enables use of webpack plugins
// !-------------------------------------------------------------------------!
const webpack = require('webpack')
// !-------------------------------------------------------------------------!
// This enables changing of source directory
// !-------------------------------------------------------------------------!
const { resolve } = require('path')

module.exports = {
  // !-------------------------------------------------------------------------!
  // Change src directory
  // !-------------------------------------------------------------------------!
  srcDir: resolve('./src'),

  // !-------------------------------------------------------------------------!
  // Use webpack plugins (BUT THIS SHIT'S STILL BROKE)
  // !-------------------------------------------------------------------------!
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
      })
    ]
  // !-------------------------------------------------------------------------!
  // loaders: [
  //   {
  //     test: /\.vue$/,
  //     loader: 'vue-loader'
  //   },
  //   {
  //     test: require.resolve('jquery'),
  //     loader: 'expose?$'
  //   }
  // ]
  // !-------------------------------------------------------------------------!
  // Vendor is everything that needs to be client side or something like that
  // Window or Document undefined?
  // This is due to the server-side rendering. If you need to specify that you
  // want to import a resource only on the client-side, you need to use the
  // process.browser variable.
  // https://nuxtjs.org/faq/window-document-undefined/
  // !-------------------------------------------------------------------------!
  // vendor: ['jquery', 'vueisotope', 'isotope-layout', 'vue-js-modal', 'vuebar']
  // vendor: ['jquery']
  },

  // !-------------------------------------------------------------------------!
  // Set environment to development for robust uh errors or something
  // !-------------------------------------------------------------------------!
  env: {
    NODE_ENV: 'production'
  },

  plugins: [
    // !-------------------------------------------------------------------------!
    // Hack solution: include all the stuff that isn't working as JS where
    // Webpack doesn't get a chance to touch it, then fix it later so there's at
    // least something online.
    // GO TO HEAD TAG AND REMOVE THAT SHIT WHEN YOU FIX THIS
    // !-------------------------------------------------------------------------!
    // TODO: Someday, get VueAffix working and ditch vue-sticky
    // !-------------------------------------------------------------------------!
    // { src: 'vue-affix' },
    // !-------------------------------------------------------------------------!
    // { src: '~/plugins/jquery.js', ssr: false },
    { src: '~/plugins/vue-sticky.js' },
    { src: '~/plugins/vue-js-modal.js' },
    { src: '~/plugins/ga.js', ssr: false }
  ],

  css: [
    '~assets/css/normalize.css',
    '~assets/sass/main.scss',
    '~assets/css/layout.css',
    '~assets/css/animate.css',
    // !-------------------------------------------------------------------------!
    // TODO: Fix so that fancybox is not included on every page, only where necessary
    // !-------------------------------------------------------------------------!
    '~assets/css/jquery.fancybox.css'
  ],

  head: {
    htmlAttrs: {
      lang: 'en'
    },
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

  manifest: {
    name: 'Jonathan',
    lang: 'en',
    theme_color: '#ff0099'
  },

  loading: {
    // !-------------------------------------------------------------------------!
    // Progress bar options.
    // !-------------------------------------------------------------------------!
    color: '#00bfff',
    height: '2px'
  },

  // !-------------------------------------------------------------------------!
  // The module @nuxtjs/pwa should come after any other modules
  // !-------------------------------------------------------------------------!
  modules: [
    // '@nuxtjs/sitemap',
    ['@nuxtjs/pwa', { icon: false }]
  ],

  // !-------------------------------------------------------------------------!
  // Cache stuff.
  // !-------------------------------------------------------------------------!
  cache: {
    max: 1000,
    maxAge: 900000
  },

  // !-------------------------------------------------------------------------!
  // HTTPS middleware should reroute all pages to HTTPS
  // !-------------------------------------------------------------------------!
  router: {
    middleware: ['https'],
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  extend (config) {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
  }

}
