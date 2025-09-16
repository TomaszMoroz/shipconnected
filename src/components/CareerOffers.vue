<template>
  <div class="career-offers">
    <div class="career-benefits-bar q-mb-lg row items-center justify-between">
      <div class="row items-center">
        <q-icon name="star" color="primary" size="32px" class="q-mr-sm" />
        <span class="text-weight-bold text-blue-10"
          >Dołącz do nas i zyskaj: stabilność, rozwój, szkolenia, satysfakcję!</span
        >
      </div>
      <q-btn
        color="accent"
        icon="assignment"
        label="Prześlij CV"
        @click="emit('showForm')"
        outline
        class="q-ml-md"
      />
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
.career-benefits-bar {
  background: #e3f2fd;
  border-radius: 8px;
  box-shadow: 0 2px 8px #b0bec522;
  padding: 12px 24px;
  max-width: 700px;
  margin: 0 auto 24px auto;
  font-size: 1.1rem;
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
/* Modern offers grid using flexbox */
.offers-grid {
  width: 100%;
  display: flex;
  justify-content: center;
}
.offers-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  max-width: 1200px;
}
.offer-card {
  width: 320px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0 2px 12px #b0bec522;
  background: #fff;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  margin: 0;
}
.offer-card:hover {
  box-shadow: 0 8px 32px #1976d255;
  transform: translateY(-4px) scale(1.03);
}
.offer-card-section {
  padding: 24px 20px 12px 20px;
}
.offer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 6px;
}
.offer-short {
  color: #607d8b;
  margin-bottom: 10px;
}
.offer-card-actions {
  padding: 0 20px 16px 20px;
}
.career-offer-dialog-title {
  color: #1976d2;
  margin-bottom: 12px;
}
.career-offer-dialog-content ul {
  margin-left: 18px;
}
</style>
