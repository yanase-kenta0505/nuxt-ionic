import { defineNuxtPlugin } from "#app";
import amplifyConfig from '../src/aws-exports'
import { Amplify } from "@aws-amplify/core"
import '@aws-amplify/ui-vue'

export default defineNuxtPlugin(()=> {
  Amplify.configure(amplifyConfig)
})

