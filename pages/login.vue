<script setup>
  import { Auth } from 'aws-amplify';
  import { useIonRouter } from '@ionic/vue';
  const ionRouter = useIonRouter()

  const username = ref('')
  const password = ref('')
  const email = ref('')

  const login = async () => {
    try {
      const { user } = await Auth.signIn({
        "username": username.value,
        "password": password.value,
      }) 
      ionRouter.push('/')
    } catch (error) {
      console.log('error')
    }

    username.value = ''
    password.value = ''
    email.value = ''
  }

  const toSignUp = () => ionRouter.push('/signup')
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ログイン</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label>ユーザー名</ion-label>
        <ion-input v-model="username" />
      </ion-item>
      <ion-item>
        <ion-label>パスワード</ion-label>
        <ion-input v-model="password" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="login">ログイン</ion-button>
      <ion-button expand="block" class="ion-margin-top" @click="toSignUp" color="success">サインアップ画面へ</ion-button>
    </ion-content>
  </ion-page>
</template>