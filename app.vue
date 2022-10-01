<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
<authenticator>
  <ion-app>
    <Script src="./public/js/polyfill.js" />
    <ion-router-outlet />
  </ion-app>
</authenticator>
</template>