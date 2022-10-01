import { defineNuxtPlugin } from "#app";
import amplifyConfig from '../src/aws-exports'
import { Amplify } from "@aws-amplify/core"
import '@aws-amplify/ui-vue'
import { Auth } from '@aws-amplify/auth'

export default defineNuxtPlugin(()=> {
  Amplify.configure(amplifyConfig)

  return {
    provide: {
      auth: Auth
    }
  }
})

