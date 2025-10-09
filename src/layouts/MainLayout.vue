<template>
  <q-layout view="lHh Lpr lFf" class="bg-blue-1">
    <q-header elevated class="bg-blue-8 text-white q-pa-none">
      <div
        class="navbar wave-navbar bg-blue-8 text-white q-px-md flex items-center"
        style="min-height: 64px; position: relative; overflow: hidden"
      >
        <svg
          class="wave-bg"
          viewBox="0 0 1440 80"
          width="100%"
          height="80"
          preserveAspectRatio="none"
          style="
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 1;
            pointer-events: none;
          "
        >
          <path
            fill="#1565c0"
            fill-opacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <a
          href="#"
          class="logo-link flex items-center"
          style="z-index: 2; position: relative; text-decoration: none"
          @click="(e) => scrollToSection(e, 'hero')"
        >
          <div
            ref="compassRef"
            @mouseenter="animateCompass"
            class="logo-compass"
            style="
              width: 64px;
              height: 64px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform 0.2s cubic-bezier(0.4, 2, 0.6, 1);
              will-change: transform;
              cursor: pointer;
              background: #fff;
              border-radius: 50%;
              border: 3px solid #1565c0;
              box-sizing: border-box;
              overflow: hidden;
            "
          >
            <img
              :src="logoWww"
              alt="logo"
              style="width: 68px; height: 68px; object-fit: contain; display: block"
            />
          </div>
          <div class="logo-text q-ml-md">
            <span class="logo-line1">Shipconnected</span><br />
            <span class="logo-line2">LTD</span>
          </div>
        </a>
        <div
          v-if="!isMobile"
          class="menu-links q-ml-auto flex items-center q-gutter-xs"
          style="z-index: 2"
        >
          <q-btn
            flat
            label="O firmie"
            class="q-mx-xs text-weight-medium"
            @click="(e) => scrollToSection(e, 'about')"
          />
          <q-btn
            flat
            label="Oferta"
            class="q-mx-xs text-weight-medium"
            @click="(e) => scrollToSection(e, 'offer')"
          />
          <q-btn
            flat
            label="Kariera"
            class="q-mx-xs text-weight-medium"
            @click="(e) => scrollToSection(e, 'kariera')"
          />
          <q-btn
            flat
            label="Realizacje"
            class="q-mx-xs text-weight-medium"
            @click="(e) => scrollToSection(e, 'realizacje')"
          />
          <q-btn
            flat
            label="Kontakt"
            class="q-mx-xs text-weight-medium"
            @click="(e) => scrollToSection(e, 'kontakt')"
          />
        </div>
        <div v-if="isMobile" style="flex: 1"></div>
        <q-btn
          v-if="isMobile"
          flat
          dense
          round
          icon="menu"
          style="margin-left: auto; z-index: 2"
          @click="drawer = true"
          aria-label="Menu"
        />
        <q-drawer v-if="isMobile" v-model="drawer" side="right" overlay>
          <div class="q-pa-md">
            <q-btn
              flat
              class="bg-white text-blue-10 q-mb-sm full-width"
              label="O firmie"
              @click="scrollToSectionWithDrawer('about')"
            />
            <q-btn
              flat
              class="bg-white text-blue-10 q-mb-sm full-width"
              label="Oferta"
              @click="scrollToSectionWithDrawer('offer')"
            />
            <q-btn
              flat
              class="bg-white text-blue-10 q-mb-sm full-width"
              label="Kariera"
              @click="scrollToSectionWithDrawer('kariera')"
            />
            <q-btn
              flat
              class="bg-white text-blue-10 q-mb-sm full-width"
              label="Realizacje"
              @click="scrollToSectionWithDrawer('realizacje')"
            />
            <q-btn
              flat
              class="bg-white text-blue-10 q-mb-sm full-width"
              label="Kontakt"
              @click="scrollToSectionWithDrawer('kontakt')"
            />
          </div>
        </q-drawer>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-10 text-white text-center q-pa-md">
      <div>© 2025 Shipconnected Ltd | Przemysł stoczniowy</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
function scrollToSectionWithDrawer(id) {
  drawer.value = false
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      const header = document.querySelector('.q-header')
      const offset = header ? header.offsetHeight : 0
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, 400)
}
import logoWww from '../assets/images/logo_www.png'
// Smooth scroll do sekcji landing page z offsetem headera
function scrollToSection(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    const header = document.querySelector('.q-header')
    const offset = header ? header.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
const compassRef = ref(null)
const drawer = ref(false)
let animating = false

const { proxy } = getCurrentInstance()
const isMobile = computed(() => proxy.$q.screen.width < 700)

function animateCompass() {
  if (animating) return
  animating = true
  const el = compassRef.value
  if (!el) return
  let angle = 0
  let direction = 1
  let speed = 18 // deg per frame, start fast
  let minSpeed = 0.5
  let deceleration = 0.97
  function step() {
    if (speed < minSpeed) {
      el.style.transform = 'rotate(0deg)'
      animating = false
      return
    }
    angle += direction * speed
    // Zmieniaj kierunek co 60 stopni
    if (Math.abs(angle) > 60) direction *= -1
    el.style.transform = `rotate(${angle}deg)`
    speed *= deceleration
    requestAnimationFrame(step)
  }
  step()
}

onMounted(() => {
  setTimeout(() => animateCompass(), 300)
})
</script>
<style>
.wave-navbar {
  position: relative;
  min-height: 64px;
  overflow: hidden;
}
.wave-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  pointer-events: none;
}
.logo-windrose {
  position: relative;
  z-index: 2;
}
@font-face {
  font-family: 'Lato';
  src: url('@/assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lato';
  src: url('@/assets/fonts/Lato/Lato-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lato';
  src: url('@/assets/fonts/Lato/Lato-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Lato';
  src: url('@/assets/fonts/Lato/Lato-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
.logo-text {
  font-family: 'Lato', Arial, sans-serif !important;
  color: #fff;
  line-height: 1.1;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  user-select: none;
}
.logo-line1 {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.logo-line2 {
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  opacity: 0.85;
}
@media (max-width: 700px) {
  .logo-text {
    font-size: 0.98rem;
  }
  .logo-line1 {
    font-size: 0.98rem;
  }
  .logo-line2 {
    font-size: 0.82rem;
  }
}
</style>
