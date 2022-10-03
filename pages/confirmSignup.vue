<script setup>
  import { Auth } from 'aws-amplify'
  import { useIonRouter } from '@ionic/vue';
  const username = ref('')
  const confirmCode = ref()
  const ionRouter = useIonRouter()
  const confirmSignup = async () => {
    try {
      await Auth.confirmSignUp(username.value, confirmCode.value)
      console.log('ok')
      ionRouter.push('/test')
    } catch (error) {
      console.log(error)
    }
  }
</script>


<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>登録確認</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label>ユーザー名</ion-label>
        <ion-input v-model="username" />
      </ion-item>
      <ion-item>
        <ion-label>確認コード</ion-label>
        <ion-input v-model="confirmCode" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="confirmSignup">確認</ion-button>
    </ion-content>
  </ion-page>
</template>