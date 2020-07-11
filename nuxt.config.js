import messages from './assets/internationalization/index.js'

export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Yannick Spoerl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yannick Spoerl - My personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [
    '~plugins/loadContent.js',
  ],
  components: true,
  buildModules: [],
  modules: [
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'de',
      messages: messages
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    }
  },
  build: {
    transpile: ['vue-scroll-snap']
  }
}
