<template>
  <q-layout view="lHh Lpr lFf" class="bg-blue-1">
    <q-header elevated class="bg-blue-8 text-white q-pa-none">
      <div class="wave-header">
        <svg
          viewBox="0 0 1440 80"
          width="100%"
          height="80"
          preserveAspectRatio="none"
          style="display: block"
        >
          <path
            fill="#1565c0"
            fill-opacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <q-toolbar class="bg-transparent text-white absolute-top q-px-md q-py-sm flex items-center justify-between">
          <div class="logo-compass-wrapper flex items-center">
            <div class="logo-compass" @mouseenter="hoverCompass = true" @mouseleave="hoverCompass = false">
              <svg viewBox="0 0 48 48" width="40" height="40" :class="[{'compass-anim': true, 'compass-hover': hoverCompass}]">
                <circle cx="24" cy="24" r="22" fill="#fff" stroke="#1565c0" stroke-width="3" />
                <polygon points="24,8 28,24 24,40 20,24" fill="#1565c0" />
                <circle cx="24" cy="24" r="3" fill="#1565c0" />
              </svg>
            </div>
            <span class="text-h5 text-weight-bold q-ml-sm">Ship Connected</span>
          </div>
          <div class="q-gutter-sm q-hidden-xs">
            <q-btn flat label="O Firmie" to="#about" class="q-mx-xs" />
            <q-btn flat label="Oferta" to="#offer" class="q-mx-xs" />
            <q-btn flat label="Kariera" to="#career" class="q-mx-xs" />
            <q-btn flat label="Realizacje" to="#projects" class="q-mx-xs" />
            <q-btn flat label="Kontakt" to="#contact" class="q-mx-xs" />
          </div>
          <q-btn flat dense round icon="menu" class="q-hidden-sm-up" @click="drawer = true" aria-label="Menu" />
        </q-toolbar>
        <q-drawer v-model="drawer" side="right" overlay class="q-hidden-sm-up">
          <q-list>
            <q-item clickable v-close-popup to="#about"><q-item-section>O Firmie</q-item-section></q-item>
            <q-item clickable v-close-popup to="#offer"><q-item-section>Oferta</q-item-section></q-item>
            <q-item clickable v-close-popup to="#career"><q-item-section>Kariera</q-item-section></q-item>
            <q-item clickable v-close-popup to="#projects"><q-item-section>Realizacje</q-item-section></q-item>
            <q-item clickable v-close-popup to="#contact"><q-item-section>Kontakt</q-item-section></q-item>
          </q-list>
        </q-drawer>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-10 text-white text-center q-pa-md">
      <div>© 2025 Ship Connected | Przemysł stoczniowy</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
const hoverCompass = ref(false)
</script>
<style>
.wave-header {
  position: relative;
  overflow: hidden;
  min-height: 80px;
}
.wave-header svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
}
.wave-header .q-toolbar {
  position: relative;
  z-index: 2;
  background: transparent;
}
</style>
.logo-compass-wrapper {
  align-items: center;
}
.logo-compass {
  transition: transform 0.5s cubic-bezier(.4,2,.6,1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.compass-anim {
  transform: rotate(-20deg);
  transition: transform 1.2s cubic-bezier(.4,2,.6,1);
}
.compass-hover {
  transform: rotate(0deg) scale(1.08);
  filter: drop-shadow(0 2px 8px #1565c088);
}
@media (max-width: 600px) {
  .logo-compass-wrapper span {
    font-size: 1.1rem;
  }
}
