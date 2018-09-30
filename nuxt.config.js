var state = require('./store/state.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Viettech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src:'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css' }, 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Generate dynamic pages
  */
  generate: {
    dir: '../public',
    routes() {
      return state.organisms.map(o => {
        return '/organism/' + o.id
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/',
    extractCSS: true,
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        ["transform-runtime", {
          "polyfill": true,
          "regenerator": true
        }]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}