@media (max-width: 900px) { .hero-col-left, .hero-col-center, .hero-col-right { clip-path: none
!important; border-radius: 0 !important; } }
<template>
  <q-page>
    <div id="hero" class="hero-section">
      <div
        :class="[$q.screen.lt.md ? 'column' : 'row', 'q-gutter-none hero-row']"
        style="height: 100%; min-height: inherit"
      >
        <div
          ref="leftCol"
          :class="[
            $q.screen.lt.md ? 'q-col-12 q-flex' : 'col-5',
            'flex flex-center hero-col-left',
            leftColVisible ? 'hero-animate-in' : '',
          ]"
          :style="$q.screen.lt.md ? 'flex: 3 1 0%; min-height: 0;' : ''"
        >
          <template v-if="$q.screen.lt.md">
            <q-img
              src="../assets/images/inner_view.jpeg"
              alt="Widok wnętrza Shipconnected"
              style="
                max-width: 100%;
                max-height: 220px;
                object-fit: cover;
                border-radius: 12px;
                opacity: 0.9;
                margin: 0 auto;
              "
              fit="cover"
            />
          </template>
        </div>
        <div
          ref="centerCol"
          :class="[
            $q.screen.lt.md ? 'q-col-12 q-flex' : 'col-2',
            'flex flex-center hero-col-center',
            centerColVisible ? 'hero-animate-in' : '',
          ]"
          :style="$q.screen.lt.md ? 'flex: 0.3 1 0%; min-height: 0;' : ''"
        >
          <div class="hero-content text-center">
            <div
              class="hero-title text-h2 text-weight-bold text-blue-10 q-mb-md"
              :style="$q.screen.lt.md ? 'font-size:2rem;' : ''"
            >
              Shipconnected <br />
              <p
                class="text-h3 text-weight-bold text-blue-9"
                :style="$q.screen.lt.md ? 'font-size:1.2rem;' : ''"
              >
                LTD
              </p>
            </div>
            <div
              class="hero-subtitle text-h5 text-blue-8 q-mb-xl"
              :style="$q.screen.lt.md ? 'font-size:1rem;' : ''"
            >
              Nowoczesne rozwiązania dla przemysłu stoczniowego
            </div>
            <!-- <div class="flex flex-center justify-center">
              <q-btn
                color="primary"
                size="lg"
                label="Poznaj naszą ofertę"
                href="#offer"
                class="q-px-xl q-py-sm"
                unelevated
              />
            </div> -->
          </div>
        </div>
        <div
          ref="rightCol"
          :class="[
            $q.screen.lt.md ? 'q-col-12 q-flex' : 'col-5',
            'flex flex-center hero-col-right',
            rightColVisible ? 'hero-animate-in' : '',
          ]"
          :style="$q.screen.lt.md ? 'flex: 3 1 0%; min-height: 0;' : ''"
        >
          <template v-if="$q.screen.lt.md">
            <q-img
              src="../assets/images/logo_www.png"
              alt="Kompas Shipconnected"
              style="max-width: 220px; max-height: 220px; opacity: 0.18; margin: 0 auto"
              fit="contain"
            />
          </template>
        </div>
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

    <!-- O firmie -->
    <section id="about" class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text-wrapper">
            <div class="about-badge">
              <q-icon name="engineering" color="primary" />
              <span>Doświadczeni specjaliści stoczniowi</span>
            </div>
            <h2 class="about-title">O Nas</h2>
            <p class="about-description">
              Firma Shipconnected LTD to renomowany dostawca usług w zakresie remontów statków.
              Specjalizujemy się w branży ślusarskiej, wyposażeniu oraz wentylacji. Nasza
              wieloletnia obecność na rynku oraz zaangażowanie w każde zlecenie pozwala nam
              gwarantować najwyższą jakość świadczonych usług.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Lat doświadczenia</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Zrealizowanych projektów</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
          <div class="about-image-wrapper">
            <div class="image-container">
              <q-img
                src="../assets/images/crane.jpeg"
                alt="Żuraw stoczniowy - Shipconnected LTD"
                class="about-image"
                fit="cover"
              />
              <div class="image-overlay">
                <q-icon name="precision_manufacturing" size="48px" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Oferta -->
    <section id="offer" class="offer-section">
      <div class="offer-background">
        <div class="offer-container">
          <div class="offer-header">
            <div class="offer-badge">
              <q-icon name="engineering" color="primary" />
              <span>Nasze specjalizacje</span>
            </div>
            <h2 class="offer-title">Kompleksowe Usługi Stoczniowe</h2>
            <p class="offer-subtitle">
              Łączymy wieloletnie doświadczenie z nowoczesnymi technologiami, aby dostarczać usługi
              najwyższej jakości w branży stoczniowej.
            </p>
          </div>

          <div class="services-grid">
            <!-- Ślusarstwo -->
            <div class="service-card metallurgy">
              <div class="service-icon-wrapper">
                <div class="service-icon-bg">
                  <q-icon name="precision_manufacturing" class="service-icon" />
                </div>
                <div class="service-number">01</div>
              </div>
              <div class="service-content">
                <h3 class="service-title">Ślusarstwo Okrętowe</h3>
                <p class="service-description">
                  Specjalistyczne usługi ślusarskie dostosowane do wymagań przemysłu morskiego.
                </p>
                <div class="service-features">
                  <div class="feature-item">
                    <q-icon name="build_circle" class="feature-icon" />
                    <span>Naprawy konstrukcji statków</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="construction" class="feature-icon" />
                    <span>Produkcja elementów metalowych</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="handyman" class="feature-icon" />
                    <span>Montaż i demontaż urządzeń</span>
                  </div>
                </div>
              </div>
              <div class="service-overlay"></div>
            </div>

            <!-- Wyposażenie -->
            <div class="service-card equipment">
              <div class="service-icon-wrapper">
                <div class="service-icon-bg">
                  <q-icon name="settings_applications" class="service-icon" />
                </div>
                <div class="service-number">02</div>
              </div>
              <div class="service-content">
                <h3 class="service-title">Wyposażenie Okrętowe</h3>
                <p class="service-description">
                  Kompleksowe rozwiązania wyposażeniowe dla nowoczesnych jednostek pływających.
                </p>
                <div class="service-features">
                  <div class="feature-item">
                    <q-icon name="upgrade" class="feature-icon" />
                    <span>Modernizacja wyposażenia</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="chair" class="feature-icon" />
                    <span>Produkcja mebli okrętowych</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="inventory_2" class="feature-icon" />
                    <span>Systemy magazynowania</span>
                  </div>
                </div>
              </div>
              <div class="service-overlay"></div>
            </div>

            <!-- Wentylacja -->
            <div class="service-card ventilation">
              <div class="service-icon-wrapper">
                <div class="service-icon-bg">
                  <q-icon name="air" class="service-icon" />
                </div>
                <div class="service-number">03</div>
              </div>
              <div class="service-content">
                <h3 class="service-title">Systemy Wentylacyjne</h3>
                <p class="service-description">
                  Profesjonalne projektowanie i instalacja systemów wentylacji morskiej.
                </p>
                <div class="service-features">
                  <div class="feature-item">
                    <q-icon name="design_services" class="feature-icon" />
                    <span>Projektowanie systemów</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="build" class="feature-icon" />
                    <span>Instalacja i montaż</span>
                  </div>
                  <div class="feature-item">
                    <q-icon name="engineering" class="feature-icon" />
                    <span>Serwis i konserwacja</span>
                  </div>
                </div>
              </div>
              <div class="service-overlay"></div>
            </div>
          </div>

          <div class="offer-cta">
            <div class="cta-content">
              <h3 class="cta-title">Potrzebujesz wyceny?</h3>
              <p class="cta-description">
                Skontaktuj się z nami już dziś i porozmawiajmy o twoim projekcie
              </p>
            </div>
            <q-btn
              color="primary"
              size="lg"
              label="Kontakt"
              @click="scrollToSection('kontakt')"
              class="cta-button"
              unelevated
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Kariera -->
    <!-- Kariera -->
    <section id="kariera" class="career-section">
      <div class="career-background">
        <div class="career-container">
          <div class="career-header">
            <h2 class="career-title">Kariera w Shipconnected</h2>
            <p class="career-subtitle">
              Szukamy doświadczonych specjalistów, którzy chcą rozwinąć swój potencjał w dynamicznie
              rozwijającej się firmie stoczniowej.
            </p>
            <!-- koniec podtytułu -->
            <div class="career-email-info q-mt-md q-mb-md text-center">
              <q-icon name="email" color="primary" size="md" class="q-mr-sm" />
              <span class="text-white"
                >Możesz również przesłać swoje CV na adres:
                <a href="mailto:rekrutacja@shipconnected.com" class="text-blue-8 text-weight-bold"
                  >rekrutacja@shipconnected.com</a
                >
              </span>
            </div>
          </div>

          <div class="career-content">
            <transition name="career-fade" mode="out-in">
              <component
                :is="careerView"
                @showForm="
                  (title) => {
                    showForm = true
                    appliedPosition = title
                  }
                "
                @backToOffers="showForm = false"
                :appliedPosition="appliedPosition"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Realizacje -->
    <section id="realizacje" class="realizacje-section">
      <div class="realizacje-container">
        <div class="realizacje-header">
          <div class="realizacje-badge">
            <q-icon name="construction" color="primary" />
            <span>Nasze osiągnięcia</span>
          </div>
          <h2 class="realizacje-title">Realizacje</h2>
          <p class="realizacje-subtitle">
            Przedstawiamy wybrane projekty zrealizowane przez nasz zespół w przemyśle stoczniowym
          </p>
        </div>

        <div class="gallery-grid">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="gallery-item"
            @click="openGalleryOverlay(index)"
          >
            <div class="gallery-image-wrapper">
              <q-img :src="project.image" alt="Realizacja" class="gallery-image" fit="cover" />
              <div class="gallery-overlay-hover">
                <q-icon name="zoom_in" size="48px" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full Screen Gallery Overlay -->
      <q-dialog v-model="galleryOverlay" maximized>
        <q-card class="gallery-overlay-card">
          <q-card-section class="gallery-overlay-header">
            <div class="gallery-overlay-controls">
              <q-btn
                flat
                round
                icon="chevron_left"
                color="white"
                size="lg"
                @click="previousImage"
                :disable="currentImageIndex === 0"
              />
              <span class="gallery-counter"
                >{{ currentImageIndex + 1 }} / {{ projects.length }}</span
              >
              <q-btn
                flat
                round
                icon="chevron_right"
                color="white"
                size="lg"
                @click="nextImage"
                :disable="currentImageIndex === projects.length - 1"
              />
              <q-btn
                flat
                round
                icon="close"
                color="white"
                size="lg"
                @click="closeGallery"
                class="q-ml-md"
              />
            </div>
          </q-card-section>
          <q-card-section class="gallery-overlay-content">
            <div class="gallery-full-image-wrapper" v-if="currentProject">
              <!-- Loading indicator -->
              <div v-if="imageLoading" class="image-loading-wrapper">
                <q-spinner-gears size="60px" color="white" />
                <div class="loading-text">Ładowanie zdjęcia...</div>
              </div>

              <!-- Image -->
              <img
                v-show="!imageLoading"
                :src="currentProject.image"
                alt="Realizacja"
                class="gallery-full-image"
                @load="onImageLoad"
                @error="onImageError"
                @click="closeGallery"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </section>

    <!-- Kontakt -->
    <section id="kontakt" class="kontakt-section">
      <div class="kontakt-container">
        <div class="contact-header">
          <div class="contact-title">Rozpocznijmy współpracę</div>
          <div class="contact-subtitle">Skontaktuj się z nami aby omówić Twój projekt</div>
        </div>

        <div class="row justify-center q-mt-xl">
          <div class="col-12 col-lg-10">
            <div class="contact-grid">
              <!-- Główna karta kontaktowa -->
              <div class="contact-main-card">
                <div class="contact-card-header">
                  <div class="contact-badge">
                    <q-icon name="sailing" size="24px" class="text-blue-4" />
                  </div>
                  <h3 class="contact-card-title">Shipconnected Ltd</h3>
                  <p class="contact-card-subtitle">Profesjonalne usługi maritymne i konsulting</p>
                </div>

                <div class="contact-info-grid">
                  <div class="contact-info-item">
                    <div class="contact-icon-wrapper">
                      <q-icon name="business" size="20px" />
                    </div>
                    <div class="contact-info-content">
                      <div class="contact-info-label">Siedziba główna</div>
                      <div class="contact-info-value">
                        S1 Holland Street<br />
                        Niddry Lodge<br />
                        London W8 7JB, UK
                      </div>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-icon-wrapper">
                      <q-icon name="location_on" size="20px" />
                    </div>
                    <div class="contact-info-content">
                      <div class="contact-info-label">Oddział Polska</div>
                      <div class="contact-info-value">
                        ul. Na Ostrowiu 1<br />
                        80-958 Gdańsk
                      </div>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-icon-wrapper">
                      <q-icon name="phone" size="20px" />
                    </div>
                    <div class="contact-info-content">
                      <div class="contact-info-label">Telefon</div>
                      <div class="contact-info-value">+48 791 101 550</div>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-icon-wrapper">
                      <q-icon name="email" size="20px" />
                    </div>
                    <div class="contact-info-content">
                      <div class="contact-info-label">Email</div>
                      <a
                        href="mailto:t.hinz@shipconnected.com"
                        class="contact-info-value contact-link"
                      >
                        t.hinz@shipconnected.com
                      </a>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-icon-wrapper">
                      <q-icon name="schedule" size="20px" />
                    </div>
                    <div class="contact-info-content">
                      <div class="contact-info-label">Godziny pracy</div>
                      <div class="contact-info-value">Poniedziałek - Piątek<br />7:00 - 15:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dodatkowe informacje -->
              <div class="contact-side-cards">
                <div class="contact-feature-card">
                  <div class="feature-card-icon">
                    <q-icon name="support_agent" size="32px" class="text-blue-4" />
                  </div>
                  <h4 class="feature-card-title">Profesjonalne wsparcie</h4>
                  <p class="feature-card-text">
                    Nasz zespół ekspertów jest dostępny aby pomóc w realizacji Twoich projektów
                    maritymnych
                  </p>
                </div>

                <div class="contact-feature-card">
                  <div class="feature-card-icon">
                    <q-icon name="verified" size="32px" class="text-green-4" />
                  </div>
                  <h4 class="feature-card-title">Sprawdzona jakość</h4>
                  <p class="feature-card-text">
                    Lata doświadczenia i setki zrealizowanych projektów gwarantują najwyższą jakość
                    usług
                  </p>
                </div>

                <div class="contact-feature-card">
                  <div class="feature-card-icon">
                    <q-icon name="speed" size="32px" class="text-orange-4" />
                  </div>
                  <h4 class="feature-card-title">Szybka realizacja</h4>
                  <p class="feature-card-text">
                    Efektywne procesy i nowoczesne rozwiązania pozwalają na terminową realizację
                    projektów
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import CareerOffers from '../components/CareerOffers.vue'
import CareerForm from '../components/CareerForm.vue'
import { ref, computed, onMounted, nextTick } from 'vue'

// Import gallery images
import cargoImg from '../assets/images/done/cargo.jpeg'
import engineImg from '../assets/images/done/engine.jpeg'
import kitchenImg from '../assets/images/done/kitchen.jpeg'
import pipes2Img from '../assets/images/done/pipes2.jpeg'
import shipImg from '../assets/images/done/ship.jpeg'
import flexImg from '../assets/images/done/flex.jpeg'
import hullImg from '../assets/images/done/big.jpeg'
import deckImg from '../assets/images/done/red.jpeg'
import ventImg from '../assets/images/done/sections.jpeg'
import boxImg from '../assets/images/done/box.jpeg'

const showForm = ref(false)
const CareerOffersComp = CareerOffers
const CareerFormComp = CareerForm
const careerView = computed(() => (showForm.value ? CareerFormComp : CareerOffersComp))

// Gallery functionality
const galleryOverlay = ref(false)
const currentImageIndex = ref(0)
const imageLoading = ref(false)

const projects = ref([
  { image: cargoImg },
  { image: engineImg },
  { image: kitchenImg },
  { image: boxImg }, // replaced pipesImg with boxImg
  { image: pipes2Img },
  { image: shipImg },
  { image: flexImg },
  { image: hullImg },
  { image: deckImg },
  { image: ventImg },
])

const currentProject = computed(() => projects.value[currentImageIndex.value])

function openGalleryOverlay(index) {
  console.log('Opening gallery for index:', index, 'Project:', projects.value[index])
  currentImageIndex.value = index
  imageLoading.value = true
  galleryOverlay.value = true
}

function nextImage() {
  if (currentImageIndex.value < projects.value.length - 1) {
    currentImageIndex.value++
  }
}

function previousImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

function closeGallery() {
  galleryOverlay.value = false
}

// Image loading handlers
function onImageLoad(event) {
  imageLoading.value = false
  console.log('Image loaded successfully:', event.target.src)
}

function onImageError(event) {
  imageLoading.value = false
  console.error('Error loading image:', event.target.src)
}

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

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
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
/* Career Section Styles */
.career-section {
  position: relative;
  overflow: hidden;
}

.career-background {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
  padding: 80px 0;
}

.career-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.career-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

.career-header {
  text-align: center;
  margin-bottom: 80px;
}

.career-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 50px;
  margin-bottom: 32px;
  font-weight: 600;
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.career-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.career-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.career-content {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.2),
    0 16px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
}

.career-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

/* Career Transition Animations */
.career-fade-enter-active,
.career-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.career-fade-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}

.career-fade-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}

/* Realizacje Section - ciemna */
.realizacje-section {
  position: relative;
  background: linear-gradient(135deg, #475569 0%, #334155 50%, #1e293b 100%);
  overflow: hidden;
  padding: 80px 0;
}

.realizacje-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(71, 85, 105, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(100, 116, 139, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.realizacje-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

.realizacje-header {
  text-align: center;
  margin-bottom: 80px;
}

.realizacje-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(148, 163, 184, 0.15);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(148, 163, 184, 0.2);
  margin-bottom: 32px;
  font-weight: 600;
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.realizacje-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.realizacje-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Gallery Styles */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 80px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.3),
    0 16px 32px rgba(6, 182, 212, 0.2);
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.8) 0%, rgba(34, 211, 238, 0.6) 100%);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  text-align: center;
  padding: 24px;
}

.gallery-item:hover .gallery-overlay-hover {
  opacity: 1;
}

.gallery-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 16px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Full Screen Gallery Overlay */
.gallery-overlay-card {
  background: rgba(0, 0, 0, 0.95) !important;
  backdrop-filter: blur(20px);
  border: none !important;
  border-radius: 0 !important;
}

.gallery-overlay-header {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(20px);
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.gallery-overlay-info {
  flex: 1;
}

.gallery-overlay-title {
  color: white;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.gallery-overlay-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  max-width: 600px;
}

.gallery-overlay-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.gallery-counter {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  min-width: 80px;
  text-align: center;
}

.gallery-overlay-content {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
}

.gallery-full-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
}

.gallery-full-image {
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.5),
    0 16px 32px rgba(0, 0, 0, 0.3);
  display: block;
  transition: all 0.3s ease;
  cursor: zoom-out;
}

.image-loading-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 16px;
}

.loading-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .gallery-overlay-header {
    padding: 16px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .gallery-overlay-controls {
    align-self: stretch;
    justify-content: space-between;
  }

  .gallery-overlay-title {
    font-size: 1.5rem;
  }

  .gallery-overlay-description {
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) {
  .realizacje-container {
    padding: 0 16px;
  }

  .realizacje-header {
    margin-bottom: 60px;
  }

  .realizacje-title {
    font-size: 2.5rem;
  }

  .realizacje-subtitle {
    font-size: 1.125rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 60px;
  }

  .gallery-title {
    font-size: 1.125rem;
  }

  .gallery-full-image-wrapper {
    padding: 16px;
  }

  .gallery-full-image {
    max-width: 95vw;
    max-height: 70vh;
  }
}

@media (max-width: 480px) {
  .realizacje-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .gallery-overlay-header {
    padding: 12px 16px;
  }

  .gallery-overlay-title {
    font-size: 1.25rem;
  }

  .gallery-counter {
    font-size: 1rem;
    min-width: 60px;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .career-container,
  .realizacje-container {
    padding: 0 24px;
  }

  .career-title,
  .realizacje-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .career-container,
  .realizacje-container {
    padding: 0 16px;
  }

  .career-header,
  .realizacje-header {
    margin-bottom: 60px;
  }

  .career-title,
  .realizacje-title {
    font-size: 2.5rem;
  }

  .career-subtitle,
  .realizacje-subtitle {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .career-title,
  .realizacje-title {
    font-size: 2rem;
  }
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

/* O nas - jasna sekcja */
.about-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(71, 85, 105, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(100, 116, 139, 0.03) 0%, transparent 50%);
  opacity: 1;
  pointer-events: none;
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  min-height: 600px;
}

.about-text-wrapper {
  position: relative;
  z-index: 2;
}

.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(25, 118, 210, 0.2);
}

.about-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 24px;
  line-height: 1.1;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 48px;
  max-width: 500px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.stat-item {
  text-align: left;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1976d2;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
}

.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(25, 118, 210, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;
}

.image-container:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.15),
    0 16px 32px rgba(25, 118, 210, 0.1);
}

.image-container:hover::before {
  opacity: 1;
}
.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover .about-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 80px;
  height: 80px;
  background: rgba(25, 118, 210, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .about-title {
    font-size: 3rem;
  }

  .image-container {
    max-width: 400px;
    height: 500px;
  }

  .image-container:hover {
    transform: translateY(-4px) scale(1.01);
  }
}
@media (max-width: 768px) {
  .about-container {
    padding: 0 16px;
  }

  .about-content {
    gap: 40px;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .stat-item {
    text-align: center;
  }

  .image-container {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .image-container {
    height: 350px;
  }
}

@media (max-width: 1200px) and (min-width: 901px) {
  .hero-col-center {
    padding: 50px 35px 35px 35px;
    border-radius: 28px;
  }

  .hero-content {
    margin-top: 20px;
    padding: 30px 15px;
  }

  .hero-title {
    font-size: 3.5rem !important;
  }

  .hero-subtitle {
    font-size: 1.25rem !important;
  }
}
/* Offer Section - średnio ciemna */
.offer-section {
  position: relative;
  overflow: hidden;
}

.offer-background {
  background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
  position: relative;
  padding: 80px 0;
}

.offer-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(71, 85, 105, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 116, 139, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.offer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

.offer-header {
  text-align: center;
  margin-bottom: 80px;
}

.offer-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.1);
  margin: 32px 0;
  font-weight: 600;
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.offer-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e3a8a 0%, #1976d2 50%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.offer-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.service-card {
  position: relative;
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.05),
    0 8px 16px rgba(0, 0, 0, 0.03);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid rgba(226, 232, 240, 0.8);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1976d2, #42a5f5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.1),
    0 16px 32px rgba(25, 118, 210, 0.15);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card.metallurgy {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.service-card.equipment {
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
}

.service-card.ventilation {
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
}

.service-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.service-icon-bg {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.service-icon-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent);
}

.service-icon {
  font-size: 40px;
  color: white;
  position: relative;
  z-index: 1;
}

.service-number {
  font-size: 3rem;
  font-weight: 900;
  color: #e2e8f0;
  line-height: 1;
}

.service-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.service-description {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.3s ease;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item:hover {
  padding-left: 8px;
  color: #1976d2;
}

.feature-icon {
  font-size: 20px;
  color: #1976d2;
  min-width: 20px;
}

.feature-item span {
  font-weight: 500;
  color: #475569;
  transition: color 0.3s ease;
}

.feature-item:hover span {
  color: #1976d2;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.02), transparent);
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.offer-cta {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  overflow: hidden;
}

.offer-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: white;
}

.cta-description {
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0;
  line-height: 1.5;
}

.cta-button {
  padding: 16px 32px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  background: white;
  color: #1976d2;
  border: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .offer-container {
    padding: 0 24px;
  }

  .offer-title {
    font-size: 3rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .offer-cta {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .offer-container {
    padding: 0 16px;
  }

  .offer-header {
    margin-bottom: 60px;
  }

  .offer-title {
    font-size: 2.5rem;
  }

  .offer-subtitle {
    font-size: 1.125rem;
  }

  .service-card {
    padding: 32px 24px;
  }

  .service-number {
    font-size: 2rem;
  }

  .offer-cta {
    padding: 32px 24px;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .offer-title {
    font-size: 2rem;
  }

  .service-icon-bg {
    width: 60px;
    height: 60px;
  }

  .service-icon {
    font-size: 30px;
  }

  .service-number {
    font-size: 1.5rem;
  }

  .services-grid {
    gap: 24px;
  }
}
/* Kontakt Section - najciemniejsza */
.kontakt-section {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  overflow: hidden;
  padding: 80px 0;
}

.kontakt-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

.kontakt-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(15, 23, 42, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(30, 41, 59, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

/* Kontakt Section Styles */
.contact-header {
  text-align: center;
  margin-bottom: 48px;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 12px;
  line-height: 1.2;
}

.contact-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
  }
}

/* Główna karta kontaktowa */
.contact-main-card {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  padding: 40px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.contact-main-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent);
}

.contact-main-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 32px 64px -12px rgba(0, 0, 0, 0.4),
    0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.3);
}

.contact-card-header {
  text-align: center;
  margin-bottom: 32px;
}

.contact-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
}

.contact-card-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.contact-card-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

/* Grid informacji kontaktowych */
.contact-info-grid {
  display: grid;
  gap: 24px;
  margin-bottom: 32px;
}

@media (min-width: 640px) {
  .contact-info-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.contact-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #60a5fa;
  flex-shrink: 0;
}

.contact-info-content {
  flex: 1;
  min-width: 0;
}

.contact-info-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-info-value {
  font-size: 1rem;
  color: #f1f5f9;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
}

.contact-link {
  color: #60a5fa;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #93c5fd;
  text-decoration: underline;
}

/* CTA Button */
.contact-cta {
  text-align: center;
}

.contact-primary-btn {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 14px 0 rgba(59, 130, 246, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.contact-primary-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #2563eb, #1e40af);
  box-shadow:
    0 8px 25px 0 rgba(59, 130, 246, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.contact-primary-btn:active {
  transform: translateY(0);
}

/* Karty dodatkowych funkcji */
.contact-side-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-feature-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(71, 85, 105, 0.3);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.contact-feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.4), transparent);
}

.contact-feature-card:hover {
  transform: translateY(-2px);
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(71, 85, 105, 0.5);
  box-shadow:
    0 12px 24px -4px rgba(0, 0, 0, 0.3),
    0 8px 16px -4px rgba(0, 0, 0, 0.2);
}

.feature-card-icon {
  margin-bottom: 16px;
}

.feature-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.feature-card-text {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

/* Responsywność */
@media (max-width: 1024px) {
  .kontakt-container {
    padding: 0 24px;
  }
}

@media (max-width: 767px) {
  .kontakt-container {
    padding: 0 16px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-subtitle {
    font-size: 1.125rem;
  }

  .contact-main-card {
    padding: 28px;
  }

  .contact-card-title {
    font-size: 1.5rem;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 479px) {
  .contact-title {
    font-size: 1.75rem;
  }

  .contact-main-card {
    padding: 20px;
  }

  .contact-primary-btn {
    width: 100%;
  }
}
html {
  scroll-behavior: smooth;
}
</style>
