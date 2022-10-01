// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-ionic'],
  alias: {
    './runtimeConfig': './runtimeConfig.browser'
  },
  vite: {
    define: {
      'window.global': {}
    }
  }
})
