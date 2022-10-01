<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
<authenticator>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</authenticator>
</template>