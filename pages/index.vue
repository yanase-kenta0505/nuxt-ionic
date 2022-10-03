<script setup>
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '~~/src/graphql/mutations';
import { useIonRouter } from '@ionic/vue';
definePageMeta({
  middleware: ['auth']
})
const ionRouter = useIonRouter()
const taskname = ref('')
const description = ref('')
const addTask = async () => {
  const auth = await Auth.currentAuthenticatedUser()
  console.log(auth.username)
  const input = {
    "name": taskname.value,
    "description": description.value,
    "owner": auth.username
  }

  await API.graphql(graphqlOperation(createTodo, { input }))
  taskname.value = ''
  description.value = ''
}

const signOut = async () => {
  try {
    await Auth.signOut()
    console.log('signoutしたよ')
    ionRouter.push('/login')
  } catch (error) {
    console.log(error)
  }
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
      <ion-button expand="block" class="ion-margin-top" color="danger" @click="signOut">ログアウト</ion-button>
    </ion-content>
  </ion-page>
</template>