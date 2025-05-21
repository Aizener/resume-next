// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    analyze: true
  },
  vite: {
    plugins: []
  },
  devServer: {
    host: '0.0.0.0'
  },
  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:5000/api/v1',
      // qiniuURL: 'http://sv0otr3wh.hn-bkt.clouddn.com/'
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    // head: []
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scale=no,maximum-scale=1,minimum-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4902202_l33hp03p81e.css' }
      ]
    }
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/temp'],
  //   },
  // },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  ui: {
    fonts: false
  },
  pinia: {}
})