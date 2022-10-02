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
  },
  css: [
    /* Core CSS required for Ionic components to work properly */
    '@ionic/vue/css/core.css',
    /* Basic CSS for apps built with Ionic */
    '@ionic/vue/css/normalize.css', 
    '@ionic/vue/css/structure.css', 
    '@ionic/vue/css/typography.css',
    /* Optional CSS utils that can be commented out */
    '@ionic/vue/css/padding.css', 
    '@ionic/vue/css/float-elements.css', 
    '@ionic/vue/css/text-alignment.css', 
    '@ionic/vue/css/text-transformation.css', 
    '@ionic/vue/css/flex-utils.css', 
    '@ionic/vue/css/display.css',
  ]
})
