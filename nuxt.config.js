import { state } from './store'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Nepali Bal Rachana by Nepalaya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content:
      //     'Educational Rhymes for Nepali Children. Bal Rachana is a project by nepa~laya for educating Nepali children while keeping them entertained with songs, rhymes, and videos.'
      // },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'Website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nepali Bal Rachana by Nepalaya'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Educational Rhymes for Nepali Children. Bal Rachana is a project by nepa~laya for educating Nepali children while keeping them entertained with songs, rhymes, and videos.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://balrachana.com/img/balrachana_banner.jpg'
      },
      {
        hid: 'twitter:image:alt',
        property: 'twitter:image:alt',
        content: 'Bal Rachana by Nepalaya'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Nepali Bal Rachana by nepa~laya'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@balrachana'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/youtube.js'],

  /*
   ** Nuxt.js modules
   */
  // modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  generate: {
    routes: function() {
      const sections = state().sections
      const slugs = Object.keys(sections)
        .filter(function(key) {
          return sections[key].slug !== undefined
        })
        .map(function(key) {
          return sections[key].slug
        })
      return slugs
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
