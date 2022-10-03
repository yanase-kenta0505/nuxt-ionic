import { Auth } from "aws-amplify"

export default defineNuxtRouteMiddleware(async () => {
  try {
    const auth = await Auth.currentAuthenticatedUser()
    console.log(auth.username)
    
  } catch (error) {
    console.log(error)
    return navigateTo('/login')
  }
})