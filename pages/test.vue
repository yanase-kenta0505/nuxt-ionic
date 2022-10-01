<script setup>
  import { arrowBackCircle } from 'ionicons/icons';
  import { useIonRouter } from '@ionic/vue';
  const ionRouter = useIonRouter()
  const moveToHome = () => ionRouter.back()
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>test</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>welcome test page</h1>
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button @click="moveToHome">
          <ion-icon :icon="arrowBackCircle" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>