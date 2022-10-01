// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-ionic'],
  alias: {
    '@aws-amplify/core': '@aws-amplify/core/lib',
    '@aws-amplify/auth': '@aws-amplify/auth/lib',
    './runtimeConfig': './runtimeConfig.browser'
  }
})
