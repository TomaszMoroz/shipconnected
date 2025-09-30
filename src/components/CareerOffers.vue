<template>
  <div class="career-offers">
    <div class="career-hero-section">
      <div class="career-hero-content">
        <div class="career-hero-text">
          <h3 class="career-hero-title">Dołącz do zespołu profesjonalistów</h3>
          <div class="career-benefits-grid">
            <div class="benefit-item">
              <q-icon name="security" class="benefit-icon" />
              <span>Stabilność zatrudnienia</span>
            </div>
            <div class="benefit-item">
              <q-icon name="trending_up" class="benefit-icon" />
              <span>Rozwj kariery</span>
            </div>
            <div class="benefit-item">
              <q-icon name="school" class="benefit-icon" />
              <span>Szkolenia i kursy</span>
            </div>
            <div class="benefit-item">
              <q-icon name="sentiment_satisfied" class="benefit-icon" />
              <span>Satysfakcja z pracy</span>
            </div>
          </div>
        </div>
        <div class="career-hero-action">
          <div class="cta-wrapper">
            <h4 class="cta-title">Gotowy na nowe wyzwanie?</h4>
            <p class="cta-description">Wyślij swoje CV i dołącz do naszego zespołu</p>
            <q-btn
              color="white"
              text-color="primary"
              icon="file_upload"
              label="Prześlij CV"
              @click="emit('showForm')"
              class="cv-button"
              size="lg"
              unelevated
            />
          </div>
        </div>
      </div>
    </div>
    <div class="offers-grid q-mb-xl">
      <div class="offers-flex">
        <template v-for="(offer, idx) in offers" :key="idx">
          <q-card class="offer-card" @click="openDialog(idx)" flat bordered>
            <q-card-section class="offer-card-section">
              <div class="offer-title">{{ offer.title }}</div>
              <div class="offer-short">{{ offer.short }}</div>
            </q-card-section>
            <q-card-actions align="right" class="offer-card-actions">
              <q-btn color="primary" label="Szczegóły" @click.stop="openDialog(idx)" />
            </q-card-actions>
          </q-card>
        </template>
      </div>
    </div>
    <q-dialog v-model="showDialog" maximized>
      <q-card class="career-dialog-card">
        <q-card-section class="bg-primary text-white row items-center justify-between">
          <div>
            <q-icon name="work" size="32px" class="q-mr-md" />
            <span class="career-offer-dialog-title text-h5 text-weight-bold">{{
              activeOffer.title
            }}</span>
          </div>
          <q-btn flat icon="close" v-close-popup color="white" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="career-offer-dialog-content q-mb-md">
            <div class="text-subtitle2 text-weight-bold q-mb-sm">Zakres obowiązków:</div>
            <ul class="q-pl-md q-mb-md">
              <li v-for="(duty, i) in activeOffer.duties" :key="i">{{ duty }}</li>
            </ul>
            <div class="text-subtitle2 text-weight-bold q-mb-sm">Nasze wymagania:</div>
            <ul class="q-pl-md q-mb-md">
              <li v-for="(req, i) in activeOffer.requirements" :key="i">{{ req }}</li>
            </ul>
            <div class="text-subtitle2 text-weight-bold q-mb-sm">Aplikacja:</div>
            <p>
              Prosimy o przesłanie CV lub wypełnionego Kwestionariusza osoby ubiegającej się o pracę
              na adres:
              <a href="mailto:rekrutacja@shipconnected.com">rekrutacja@shipconnected.com</a>
            </p>
          </div>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md">
          <q-btn color="accent" label="Aplikuj online" @click="applyOnline" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue'
const emit = defineEmits(['showForm'])
const showDialog = ref(false)
const activeIdx = ref(0)
const offers = Array.from({ length: 12 }).map((_, i) => ({
  title: `Spawacz Elektryczny Wyposażeniowy ${i + 1}`,
  short: `Aktualnie poszukujemy osoby na stanowisko: Spawacz Elektryczny Wyposażeniowy ${i + 1}`,
  duties: [
    'spawanie wyposażenia okrętowego na budowanych, remontowanych jednostkach oraz halach produkcyjnych.',
  ],
  requirements: [
    'posiadanie aktualnych uprawnień spawalniczych: 111, 135,136,138 stali „czarnych”, mile widziane również w metodzie 141, 135 stale nierdzewne',
    'wysokie poczucie odpowiedzialności i zaangażowanie',
    'wykształcenie minimum zasadnicze zawodowe',
    'dodatkowym atutem będzie doświadczenie w pracy na stanowisku spawacz',
  ],
}))
const activeOffer = computed(() => offers[activeIdx.value])

function openDialog(idx) {
  activeIdx.value = idx
  showDialog.value = true
}
function applyOnline() {
  showDialog.value = false
  emit('showForm')
}
</script>

<style scoped>
/* Career Hero Section */
.career-hero-section {
  margin-bottom: 48px;
}

.career-hero-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: center;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.career-hero-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.career-hero-text {
  position: relative;
  z-index: 1;
}

.career-hero-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin: 0 0 24px 0;
  line-height: 1.3;
}

.career-benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  color: white;
  transform: translateX(4px);
}

.benefit-icon {
  font-size: 20px;
  color: #3b82f6;
  min-width: 20px;
}

.career-hero-action {
  position: relative;
  z-index: 1;
}

.cta-wrapper {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
}

.cta-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.cv-button {
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.cv-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .career-hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
    text-align: center;
  }

  .career-benefits-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .career-hero-title {
    font-size: 1.5rem;
  }

  .cta-wrapper {
    padding: 24px 20px;
  }
}

@media (max-width: 480px) {
  .career-hero-content {
    padding: 24px 16px;
  }

  .career-hero-title {
    font-size: 1.25rem;
  }
}

/* Job Cards Responsive */
@media (max-width: 1024px) {
  .offers-flex {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .offers-flex {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .offer-card-section {
    padding: 24px 20px 16px 20px;
  }

  .offer-card-actions {
    padding: 0 20px 20px 20px;
  }

  .offer-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .offers-grid {
    margin-bottom: 32px;
  }

  .offer-card-section {
    padding: 20px 16px 12px 16px;
  }

  .offer-card-actions {
    padding: 0 16px 16px 16px;
  }

  .offer-title {
    font-size: 1.125rem;
  }
}
.career-dialog-card {
  border-radius: 18px;
  box-shadow: 0 8px 32px #1976d255;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}
.career-dialog-card {
  border-radius: 18px;
  box-shadow: 0 8px 32px #1976d255;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}
.career-offers {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
}
/* Modern Job Offers Grid */
.offers-grid {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
}

.offers-flex {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  max-width: 1200px;
  width: 100%;
}

.offer-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.offer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.offer-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.15),
    0 16px 32px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.offer-card:hover::before {
  transform: scaleX(1);
}

.offer-card-section {
  padding: 32px 28px 20px 28px;
  position: relative;
  z-index: 1;
}

.offer-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  line-height: 1.3;
}

.offer-short {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

.offer-card-actions {
  padding: 0 28px 28px 28px;
  position: relative;
  z-index: 1;
}

.offer-card-actions .q-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-weight: 600;
  padding: 8px 20px;
  transition: all 0.3s ease;
}

.offer-card-actions .q-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}
.career-offer-dialog-title {
  color: #1976d2;
  margin-bottom: 12px;
}
.career-offer-dialog-content ul {
  margin-left: 18px;
}
</style>
