<script setup lang="ts">
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '~~/src/graphql/mutations';
import { useIonRouter } from '@ionic/vue';
import { listTodos } from '~~/src/graphql/queries'
import { onCrateByOwnername } from '~~/src/graphql/subscriptions' 
import { OnCrateByOwnernameSubscription, Todo } from '~~/src/API'
type OnCrateByOwnernameSubscriptionEvent = {
    value: { data: OnCrateByOwnernameSubscription }
};
definePageMeta({
  middleware: ['auth']
})
const ionRouter = useIonRouter()
const taskname = ref('')
const description = ref('')
const todoList = ref([])
const addTask = async () => {
  const auth = await Auth.currentAuthenticatedUser()
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

(async() => {
  const auth = await Auth.currentAuthenticatedUser()
  console.log(auth.username)

  const todos = await API.graphql(graphqlOperation(listTodos, 
  {"filter": {
    "owner":{
      "contains": auth.username
    }
  }}
  ))
  if("data" in todos) {
    todoList.value = todos.data.listTodos.items
    const subscription = await API.graphql(graphqlOperation(onCrateByOwnername, {"owner": auth.username}))
  try {
    if("subscribe" in subscription) {
      subscription.subscribe({
        next: ({value: {data}}: OnCrateByOwnernameSubscriptionEvent) => {
          if (data.onCrateByOwnername) {
            const todo: Todo = data.onCrateByOwnername
            todoList.value.push(todo)
          }
        }
      })
  }
  } catch (error) {
    console.log(error)
  }
  }
  
})()
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
      <ion-list>
        <ion-item v-for="todo in todoList" :key="todo.id">
          {{todo.name}}
        </ion-item>
      </ion-list>
      <ion-button expand="block" class="ion-margin-top" color="danger" @click="signOut">ログアウト</ion-button>
    </ion-content>
  </ion-page>
</template>