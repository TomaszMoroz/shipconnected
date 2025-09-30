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
                Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę dla swojego projektu
              </p>
            </div>
            <q-btn
              color="primary"
              size="lg"
              label="Uzyskaj wycenę"
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
          </div>

          <div class="career-content">
            <transition name="career-fade" mode="out-in">
              <component
                :is="careerView"
                @showForm="showForm = true"
                @backToOffers="showForm = false"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Realizacje (placeholder) -->
    <section id="realizacje" class="realizacje-section">
      <div class="realizacje-container">
        <div class="realizacje-header">
          <div class="realizacje-badge">
            <q-icon name="construction" color="primary" />
            <span>Nasze osiągnięcia</span>
          </div>
          <h2 class="realizacje-title">Realizacje</h2>
          <p class="realizacje-subtitle">
            Sekcja w przygotowaniu - wkrótce zaprezentujemy nasze najlepsze projekty
          </p>
        </div>
      </div>
    </section>

    <!-- Kontakt -->
    <section id="kontakt" class="kontakt-section q-mt-xl q-mb-xl">
      <div class="container q-pa-lg">
        <div class="text-h4 text-weight-bold text-blue-10 q-mb-xl text-center">Kontakt</div>

        <div class="row justify-center">
          <div class="col-12 col-md-8">
            <q-card class="contact-card">
              <q-card-section class="bg-primary text-white text-center">
                <q-icon name="contact_mail" size="48px" class="q-mb-md" />
                <div class="text-h5 text-weight-bold">Skontaktuj się z nami</div>
                <div class="text-body1">
                  Jesteśmy gotowi odpowiedzieć na wszelkie pytania i potrzeby naszych klientów
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-sm-6">
                    <div class="contact-item">
                      <q-icon name="location_on" color="primary" size="24px" class="q-mr-sm" />
                      <div>
                        <div class="text-weight-bold">Adres</div>
                        <div>Na Ostrowiu 1</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="contact-item">
                      <q-icon name="email" color="primary" size="24px" class="q-mr-sm" />
                      <div>
                        <div class="text-weight-bold">Email</div>
                        <div>
                          <a href="mailto:t.hinz@shipconnected.com">t.hinz@shipconnected.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="contact-item">
                      <q-icon name="phone" color="primary" size="24px" class="q-mr-sm" />
                      <div>
                        <div class="text-weight-bold">Telefon</div>
                        <div>[Numer telefonu]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
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
  padding: 120px 0;
  overflow: hidden;
}

.career-background {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
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

/* Realizacje Section Styles */
.realizacje-section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  overflow: hidden;
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
}

.realizacje-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.1);
  margin-bottom: 32px;
  font-weight: 600;
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.realizacje-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e3a8a 0%, #1976d2 50%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.realizacje-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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
  .career-section,
  .realizacje-section {
    padding: 80px 0;
  }

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

/* O nas - nowoczesna sekcja */
.about-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/pattern.svg') repeat;
  opacity: 0.02;
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
  .about-section {
    padding: 80px 0;
  }

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
/* Offer Section Styles */
.offer-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.offer-background {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

.offer-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.03) 0%, transparent 50%);
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
  margin-bottom: 32px;
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
  .offer-section {
    padding: 80px 0;
  }

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
.contact-card {
  border-radius: 16px;
  box-shadow: 0 4px 16px #b0bec522;
}
.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
}
.contact-item a {
  color: #1976d2;
  text-decoration: none;
}
.contact-item a:hover {
  text-decoration: underline;
}
html {
  scroll-behavior: smooth;
}
</style>
