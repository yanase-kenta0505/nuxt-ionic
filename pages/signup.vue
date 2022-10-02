<script setup>
  const username = ref('')
  const pass = ref('')
  const email = ref('')
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
        <ion-input v-model="pass" />
      </ion-item>
      <ion-item>
        <ion-label>メールアドレス</ion-label>
        <ion-input v-model="email" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="addTask">登録</ion-button>
    </ion-content>
  </ion-page>
</template>