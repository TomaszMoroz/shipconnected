<template>
  <q-page>
    <div id="hero" class="hero-section">
      <div class="row q-gutter-none hero-row" style="height: 100%; min-height: inherit">
        <div
          ref="leftCol"
          :class="['col-5 flex flex-center hero-col-left', leftColVisible ? 'hero-animate-in' : '']"
        ></div>
        <div
          ref="centerCol"
          :class="[
            'col-2 flex flex-center hero-col-center',
            centerColVisible ? 'hero-animate-in' : '',
          ]"
        >
          <div class="hero-content text-center">
            <div class="hero-title text-h2 text-weight-bold text-blue-10 q-mb-md">
              Shipconnected
            </div>
            <div class="hero-subtitle text-h5 text-blue-8 q-mb-xl">
              Nowoczesne rozwiązania dla przemysłu stoczniowego
            </div>
            <div class="flex flex-center justify-center">
              <q-btn
                color="primary"
                size="lg"
                label="Poznaj naszą ofertę"
                href="#offer"
                class="q-px-xl q-py-sm"
                unelevated
              />
            </div>
          </div>
        </div>
        <div
          ref="rightCol"
          :class="[
            'col-5 flex flex-center hero-col-right',
            rightColVisible ? 'hero-animate-in' : '',
          ]"
        ></div>
      </div>
      <svg
        class="hero-wave"
        viewBox="0 0 1440 80"
        width="100%"
        height="80"
        preserveAspectRatio="none"
      >
        <path
          fill="#e0e3e8"
          fill-opacity="1"
          d="M0,40L60,44C120,48,240,56,360,58.7C480,61,600,59,720,54.7C840,51,960,45,1080,44C1200,43,1320,48,1380,50.7L1440,53L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
        />
        <path
          fill="#b0bec5"
          fill-opacity="0.7"
          d="M0,55L80,60C160,65,320,75,480,75C640,75,800,65,960,60C1120,55,1280,55,1360,55L1440,55L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80,320,80,160,80,80,80L0,80Z"
        />
        <path
          fill="#90a4ae"
          fill-opacity="0.5"
          d="M0,70L100,72C200,74,400,78,600,78C800,78,1000,74,1200,72C1400,70,1440,70,1440,70L1440,80L1400,80C1200,80,1000,80,800,80,600,80,400,80,200,80L0,80Z"
        />
      </svg>
    </div>

    <!-- Sekcja O firmie poza hero -->
    <!-- ...other sections in topbar order... -->
    <section id="kariera" class="kariera-section highlight">
      <transition name="slide-fade" mode="out-in">
        <component :is="careerView" @showForm="showForm = true" @backToOffers="showForm = false" />
      </transition>
    </section>
    <section id="about" class="about-section row items-center justify-center q-mt-xl q-mb-xl">
      <div class="about-text col-12 col-md-6 q-pa-md">
        <h2 class="text-h4 text-weight-bold text-blue-10 q-mb-md">O firmie</h2>
        <p class="text-body1 text-grey-8 q-mb-md">
          Ship Connected to zespół specjalistów z wieloletnim doświadczeniem w branży stoczniowej.
          Dostarczamy nowoczesne rozwiązania, które wspierają rozwój przemysłu morskiego i
          zapewniają naszym klientom przewagę technologiczną. Stawiamy na jakość, innowacyjność i
          partnerskie relacje.
        </p>
        <ul class="about-list q-pl-md q-mb-md">
          <li>Kompleksowa obsługa projektów stoczniowych</li>
          <li>Nowoczesne technologie i automatyzacja</li>
          <li>Doświadczony zespół inżynierów</li>
          <li>Indywidualne podejście do klienta</li>
        </ul>
      </div>
      <div class="about-img col-12 col-md-5 q-pa-md flex flex-center">
        <q-img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Stocznia - ilustracja"
          style="max-width: 350px; border-radius: 18px; box-shadow: 0 4px 24px #b0bec555"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import CareerOffers from '../components/CareerOffers.vue'
import CareerForm from '../components/CareerForm.vue'
import { ref, computed, onMounted, nextTick } from 'vue'

const showForm = ref(false)
const CareerOffersComp = CareerOffers
const CareerFormComp = CareerForm
const careerView = computed(() => (showForm.value ? CareerFormComp : CareerOffersComp))
// Animacja wejścia sekcji hero (desktop only)
const leftCol = ref(null)
const centerCol = ref(null)
const rightCol = ref(null)
const leftColVisible = ref(false)
const centerColVisible = ref(false)
const rightColVisible = ref(false)

function animateCompassCalibration() {
  // Animuj ::before na .hero-col-right przez CSS variable
  const rightColEl = rightCol.value
  if (!rightColEl) return
  rightColEl.style.setProperty('--logo-rotation', '-18deg')
  rightColEl.style.setProperty('--logo-transition', 'transform 0.5s cubic-bezier(0.4,0,0.2,1)')
  setTimeout(() => {
    rightColEl.style.setProperty('--logo-rotation', '18deg')
    setTimeout(() => {
      rightColEl.style.setProperty('--logo-rotation', '0deg')
    }, 500)
  }, 500)
}

onMounted(() => {
  if (window.innerWidth > 900) {
    setTimeout(() => {
      leftColVisible.value = true
    }, 80)
    setTimeout(() => {
      centerColVisible.value = true
    }, 320)
    setTimeout(() => {
      rightColVisible.value = true
      // uruchom animację logo po wejściu wszystkich kolumn
      nextTick(() => {
        setTimeout(() => {
          animateCompassCalibration()
        }, 600)
      })
    }, 560)
  } else {
    leftColVisible.value = true
    centerColVisible.value = true
    rightColVisible.value = true
  }
})
</script>

<style scoped>
/* Animacja przejścia sekcji kariera */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
/* Estetyczna, nowoczesna sekcja kariera */
.kariera-section.highlight {
  background: #fff;
  border: none;
  box-shadow: 0 4px 32px #b0bec522;
  position: relative;
  z-index: 2;
}
/* Kariera section basic styles */
.kariera-section {
  min-height: 80vh;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px #b0bec522;
  max-width: 1100px;
  margin: 64px auto;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
}
/* Animacja wejścia kolumn hero (desktop only) */
.hero-col-left,
.hero-col-right {
  opacity: 0;
  transform: translateY(400px) scale(0.98);
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-col-center {
  opacity: 0;
  transform: translateY(-400px) scale(0.98);
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-animate-in {
  opacity: 1 !important;
  transform: none !important;
}
@media (max-width: 900px) {
  .hero-col-left,
  .hero-col-center,
  .hero-col-right {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
.hero-section {
  min-height: calc(100vh - 56px);
  background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-col-left {
  background: #1976d2 url('../assets/images/inner_view.jpeg') no-repeat center center;
  background-size: cover;
  position: relative;
  /* Jeszcze mocniej pochylony trapez, węższa środkowa sekcja */
  clip-path: polygon(0 0, 100% 0, 40% 100%, 0% 100%);
}
.hero-col-center {
  background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 18px;
  /* box-shadow: 0 2px 16px #b0bec522; */
  padding: 64px 32px 32px 32px;
}
.hero-col-right {
  background: #fff;
  position: relative;
  overflow: hidden;
  /* Jeszcze mocniej pochylony trapez, węższa środkowa sekcja */
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 0% 100%);
}
.hero-col-right::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1000px;
  height: 1000px;
  max-width: none;
  max-height: none;
  background: url('../assets/images/logo_www.png') no-repeat center center;
  background-size: contain;
  opacity: 0.13;
  transform: translate(-70%, -50%) rotate(var(--logo-rotation, 0deg));
  pointer-events: none;
  z-index: 1;
  transition: var(--logo-transition, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1));
}
.hero-content {
  z-index: 2;
  margin-top: 80px;
}
.hero-wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
}

.about-section {
  min-height: calc(100vh - 56px);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  box-shadow: 0 2px 16px #b0bec522;
  display: flex;
  align-items: center;
}
.about-list {
  color: #607d8b;
  font-size: 1.1rem;
  line-height: 1.7;
  list-style: disc inside;
}
.about-img img {
  object-fit: cover;
}
@media (max-width: 900px) {
  .hero-section {
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%);
  }
  .hero-section::before {
    content: '';
    position: absolute;
    left: -96vw;
    top: 50%;
    width: 220vw;
    height: 220vw;
    background: url('../assets/images/logo_www.png') no-repeat left center;
    background-size: contain;
    opacity: 0.13;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }
  .hero-row {
    display: block !important;
  }
  .hero-col-left,
  .hero-col-right {
    display: none !important;
  }
  .hero-col-center {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    border-radius: 0;
    box-shadow: none;
    padding: 32px 8px 16px 8px;
    clip-path: none;
    background: none;
    position: relative;
    overflow: visible;
  }
  .hero-col-center::before {
    display: none;
  }
  .hero-content {
    position: relative;
    z-index: 2;
  }
}
html {
  scroll-behavior: smooth;
}
</style>
