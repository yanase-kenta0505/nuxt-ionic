<script setup>
import { arrowForwardCircle } from 'ionicons/icons';
import { useIonRouter } from '@ionic/vue';
import { Auth } from 'aws-amplify';

(async () => {
  try {
    const auth = await Auth.currentUserInfo()
    console.log(auth.username)
  } catch (error) {
    console.log(error)
  }
})()

const ionRouter = useIonRouter()
const moveToTest = () => ionRouter.push('/test')
</script>


<template>
  <!-- 必ず頭がion-pageで始まるようにする -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>hello</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Hello world</h1>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="moveToTest">
          <ion-icon :icon="arrowForwardCircle" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>