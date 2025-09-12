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
        <div class="logo-windrose flex items-center" style="z-index: 2; position: relative">
          <svg
            ref="compassRef"
            @mouseenter="animateCompass"
            width="56"
            height="56"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="
              transition: transform 0.2s cubic-bezier(0.4, 2, 0.6, 1);
              will-change: transform;
              cursor: pointer;
            "
          >
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#1565c0" stroke-width="3" />
            <polygon points="24,6 28,24 24,42 20,24" fill="#1565c0" />
            <polygon points="24,12 26,24 24,36 22,24" fill="#42a5f5" />
            <polygon points="6,24 24,28 42,24 24,20" fill="#1565c0" />
            <polygon points="12,24 24,26 36,24 24,22" fill="#42a5f5" />
            <circle cx="24" cy="24" r="3" fill="#1565c0" />
          </svg>
        </div>
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
import { ref, onMounted } from 'vue'
const compassRef = ref(null)
let animating = false

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
</style>
