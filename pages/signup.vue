<script setup>
  import { Auth } from 'aws-amplify';

  const username = ref('')
  const password = ref('')
  const email = ref('')

  const signup = async () => {
    try {
      const { user } = await Auth.signUp({
        "username": username.value,
        "password": password.value,
        attributes: {
          "email": email.value
        },
        autoSignIn: {
          enabled: true
        }
      }) 
      console.log(user)
    } catch (error) {
      console.log('error')
    }

    username.value = ''
    password.value = ''
    email.value = ''
  }
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>新規登録</ion-title>
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
      <ion-item>
        <ion-label>メールアドレス</ion-label>
        <ion-input v-model="email" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="signup">登録</ion-button>
    </ion-content>
  </ion-page>
</template>