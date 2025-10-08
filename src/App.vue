<template>
  <router-view />
</template>

<script setup>
import { initEmailJS } from './services/emailjs.js'
initEmailJS()
</script>
