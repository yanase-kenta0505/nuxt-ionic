<script setup>
  const taskname = ref('')
  const description = ref('')
  const addTask = () => {
    console.log('test')
  }
  
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>TODOを作成</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label>タスク名</ion-label>
        <ion-input v-model="taskname" />
      </ion-item>
      <ion-item>
        <ion-label>説明</ion-label>
        <ion-input v-model="description" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="addTask">追加</ion-button>
    </ion-content>
  </ion-page>
</template>