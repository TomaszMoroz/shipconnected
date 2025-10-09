<template>
  <router-view />
</template>

<script setup>
import { initEmailJS } from './services/emailjs.js'
import { Quasar } from 'quasar'
import pl from 'quasar/lang/pl'

Quasar.lang.set(pl)
initEmailJS()
</script>
