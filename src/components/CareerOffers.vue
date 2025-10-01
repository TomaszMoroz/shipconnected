<template>
  <div class="career-offers">
    <div class="career-hero-section">
      <div class="career-hero-content">
        <div class="career-hero-text">
          <h3 class="career-hero-title">Dołącz do Zespołu Shipconnected LTD</h3>
          <p class="career-hero-description">
            Dynamicznie rozwijająca się firma specjalizująca się w budowie i modernizacji statków. 
            Nasza misja to tworzenie najwyższej jakości jednostek pływających, które łączą 
            innowacyjne technologie z niezawodnością i bezpieczeństwem.
          </p>
          <div class="career-benefits-grid">
            <div class="benefit-item">
              <q-icon name="security" class="benefit-icon" />
              <span>Stabilność zatrudnienia</span>
            </div>
            <div class="benefit-item">
              <q-icon name="trending_up" class="benefit-icon" />
              <span>Rozwój kariery</span>
            </div>
            <div class="benefit-item">
              <q-icon name="school" class="benefit-icon" />
              <span>Szkolenia i kursy</span>
            </div>
            <div class="benefit-item">
              <q-icon name="verified" class="benefit-icon" />
              <span>Międzynarodowe projekty</span>
            </div>
          </div>
        </div>
        <div class="career-hero-action">
          <div class="cta-wrapper">
            <h4 class="cta-title">Praca pełna wyzwań i możliwości</h4>
            <p class="cta-description">
              Rozwijaj swoją karierę w zespole pasjonatów tworzących nowoczesne jednostki pływające na miarę XXI wieku
            </p>
            <q-btn
              color="white"
              text-color="primary"
              icon="file_upload"
              label="Aplikuj teraz"
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
    <q-dialog v-model="showDialog" class="career-dialog">
      <q-card class="career-modal">
        <!-- Modal Header -->
        <div class="modal-header">
          <div class="modal-header-content">
            <div class="job-badge">
              <q-icon name="work_outline" size="24px" />
            </div>
            <div class="job-title-section">
              <h3 class="job-title">{{ activeOffer.title }}</h3>
              <p class="job-company">Shipconnected LTD</p>
            </div>
          </div>
          <q-btn 
            flat 
            round 
            icon="close" 
            @click="showDialog = false" 
            class="close-btn"
            size="md"
          />
        </div>

        <!-- Modal Content -->
        <div class="modal-content">
          <!-- Job Description -->
          <div class="content-section">
            <div class="section-header">
              <q-icon name="description" class="section-icon" />
              <h4 class="section-title">O stanowisku</h4>
            </div>
            <p class="job-description">{{ activeOffer.description }}</p>
          </div>

          <!-- Duties Section -->
          <div class="content-section">
            <div class="section-header">
              <q-icon name="task_alt" class="section-icon" />
              <h4 class="section-title">Zakres obowiązków</h4>
            </div>
            <ul class="content-list">
              <li v-for="(duty, i) in activeOffer.duties" :key="i" class="list-item">
                {{ duty }}
              </li>
            </ul>
          </div>

          <!-- Requirements Section -->
          <div class="content-section">
            <div class="section-header">
              <q-icon name="checklist" class="section-icon" />
              <h4 class="section-title">Nasze wymagania</h4>
            </div>
            <ul class="content-list">
              <li v-for="(req, i) in activeOffer.requirements" :key="i" class="list-item">
                {{ req }}
              </li>
            </ul>
          </div>

          <!-- Benefits Section -->
          <div class="content-section">
            <div class="section-header">
              <q-icon name="star" class="section-icon" />
              <h4 class="section-title">Co oferujemy</h4>
            </div>
            <ul class="content-list benefits-list">
              <li v-for="(benefit, i) in activeOffer.benefits" :key="i" class="list-item benefit-item">
                <q-icon name="check_circle" class="benefit-check" />
                {{ benefit }}
              </li>
            </ul>
          </div>

          <!-- Application Info -->
          <div class="content-section application-section">
            <div class="section-header">
              <q-icon name="send" class="section-icon" />
              <h4 class="section-title">Aplikacja</h4>
            </div>
            <div class="application-content">
              <p class="application-text">
                Jesteśmy firmą, która dba o swoich pracowników, stawiając na ich rozwój i zadowolenie z wykonywanej pracy. 
                Oferujemy możliwość uczestniczenia w fascynujących projektach, które kształtują przyszłość przemyslu okrętowego.
              </p>
              <p class="contact-info">
                Wyślij swoje CV na adres: 
                <a href="mailto:rekrutacja@shipconnected.com" class="email-link">
                  rekrutacja@shipconnected.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="modal-actions">
          <q-btn
            @click="applyOnline"
            class="apply-btn"
            unelevated
            size="lg"
          >
            <q-icon name="send" size="18px" class="q-mr-sm" />
            Aplikuj online
          </q-btn>
          <q-btn
            href="mailto:rekrutacja@shipconnected.com"
            class="email-btn"
            outline
            size="lg"
          >
            <q-icon name="email" size="18px" class="q-mr-sm" />
            Wyślij CV
          </q-btn>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue'
const emit = defineEmits(['showForm'])
const showDialog = ref(false)
const activeIdx = ref(0)

const offers = [
  {
    title: 'Ślusarz Okrętowy',
    short: 'Montaż i konserwacja elementów statków z wykorzystaniem najnowocześniejszych narzędzi i technologii.',
    description: 'Jeżeli posiadasz doświadczenie w montażu i naprawach konstrukcji metalowych, a precyzja i dbałość o szczegóły to Twoje drugie imię, stanowisko ślusarza okrętowego jest idealne dla Ciebie.',
    duties: [
      'Montaż i konserwacja elementów statków',
      'Wykorzystywanie najnowocześniejszych narzędzi i technologii',
      'Praca z konstrukcjami metalowymi',
      'Dbałość o precyzję wykonania'
    ],
    requirements: [
      'Doświadczenie w montażu i naprawach konstrukcji metalowych',
      'Precyzja i dbałość o szczegóły',
      'Umiejętność pracy z narzędziami specjalistycznymi',
      'Wykształcenie techniczne mile widziane'
    ],
    benefits: [
      'Stabilne zatrudnienie',
      'Możliwość pracy w zespole doświadczonych specjalistów',
      'Szkolenia podnoszące kwalifikacje zawodowe'
    ]
  },
  {
    title: 'Spawacz',
    short: 'Spawanie różnych rodzajów stali w procesie tworzenia nowoczesnych jednostek pływających.',
    description: 'Poszukujemy spawaczy, którzy potrafią pracować z różnymi rodzajami stali i innymi materiałami stosowanymi w przemyśle okrętowym.',
    duties: [
      'Spawanie metodami TIG, MIG/MAG',
      'Praca z różnymi rodzajami stali',
      'Spawanie materiałów przemysłu okrętowego',
      'Kontrola jakości wykonanych spawów'
    ],
    requirements: [
      'Doświadczenie w spawaniu TIG, MIG/MAG',
      'Znajomość materiałów przemysłu okrętowego',
      'Aktualne uprawnienia spawalnicze',
      'Umiejętność czytania dokumentacji technicznej'
    ],
    benefits: [
      'Atrakcyjne wynagrodzenie i premie uzależnione od wyników',
      'Możliwość uczestnictwa w prestiżowych projektach',
      'Przyjazne środowisko pracy'
    ]
  },
  {
    title: 'Monter Wyposażenia Okrętowego',
    short: 'Instalacja i serwisowanie systemów mechanicznych i elektrycznych na pokładzie statków.',
    description: 'Jako monter wyposażenia okrętowego będziesz odpowiedzialny za instalację i serwisowanie systemów na pokładzie statków.',
    duties: [
      'Instalacja systemów mechanicznych i elektrycznych',
      'Serwisowanie wyposażenia okrętowego',
      'Montaż systemów na pokładzie statków',
      'Współpraca z zespołem specjalistów'
    ],
    requirements: [
      'Doświadczenie w montażu systemów mechanicznych i elektrycznych',
      'Umiejętność pracy w zespole',
      'Znajomość systemów okrętowych',
      'Wykształcenie techniczne'
    ],
    benefits: [
      'Wsparcie merytoryczne i techniczne',
      'Pracę na nowoczesnych jednostkach pływających',
      'Elastyczne godziny pracy'
    ]
  },
  {
    title: 'Monter Kadłubowy',
    short: 'Budowa i modernizacja kadłubów statków z wykorzystaniem dużych konstrukcji stalowych.',
    description: 'Dołącz do naszego zespołu jako monter kadłubowy, gdzie będziesz uczestniczyć w budowie i modernizacji kadłubów statków.',
    duties: [
      'Budowa i modernizacja kadłubów statków',
      'Praca z dużymi konstrukcjami stalowymi',
      'Czytanie rysunków technicznych',
      'Montaż elementów kadłuba'
    ],
    requirements: [
      'Umiejętność czytania rysunków technicznych',
      'Doświadczenie w pracy z dużymi konstrukcjami stalowymi',
      'Znajomość technologii budowy kadłubów',
      'Wykształcenie techniczne zawodowe'
    ],
    benefits: [
      'Możliwość rozwoju zawodowego i awansu',
      'Pracę w międzynarodowym środowisku',
      'Udział w szkoleniach i kursach specjalistycznych'
    ]
  }
]

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
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.career-hero-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
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
/* Professional Modal Styles */
.career-dialog {
  backdrop-filter: blur(8px);
}

.career-modal {
  max-width: 800px;
  width: 90vw;
  max-height: 90vh;
  margin: auto;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 
    0 32px 64px -12px rgba(0, 0, 0, 0.25),
    0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

/* Modal Header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 24px 32px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
}

.modal-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 32px;
  right: 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
}

.modal-header-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.job-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 16px;
  color: white;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.job-title-section {
  flex: 1;
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.job-company {
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.close-btn {
  color: #64748b;
  background: rgba(100, 116, 139, 0.1);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(100, 116, 139, 0.2);
  color: #475569;
}

/* Modal Content */
.modal-content {
  padding: 0 32px;
  max-height: 60vh;
  overflow-y: auto;
}

.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.content-section {
  margin-bottom: 32px;
}

.content-section:last-child {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.section-icon {
  color: #3b82f6;
  font-size: 20px;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.job-description {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
}

.list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
}

.list-item:last-child {
  margin-bottom: 0;
}

/* Benefits specific styling */
.benefits-list .list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-left: 0;
}

.benefits-list .list-item::before {
  display: none;
}

.benefit-check {
  color: #10b981;
  font-size: 18px;
  margin-top: 1px;
  flex-shrink: 0;
}

.benefit-item {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 8px;
}

/* Application Section */
.application-section {
  background: rgba(59, 130, 246, 0.03);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  padding: 24px;
  margin: 24px -32px 24px -32px;
}

.application-content {
  margin-top: 16px;
}

.application-text {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.contact-info {
  color: #1e293b;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
}

.email-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.email-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Modal Actions */
.modal-actions {
  display: flex;
  gap: 12px;
  padding: 24px 32px 32px 32px;
  background: #fafafa;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.apply-btn {
  flex: 1;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
}

.email-btn {
  flex: 1;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  border-radius: 16px;
  font-weight: 600;
  background: white;
  transition: all 0.3s ease;
}

.email-btn:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .career-modal {
    width: 95vw;
    max-height: 95vh;
    border-radius: 20px;
  }

  .modal-header {
    padding: 24px 20px 20px 20px;
  }

  .modal-content {
    padding: 0 20px;
  }

  .modal-actions {
    padding: 20px;
    flex-direction: column;
  }

  .job-title {
    font-size: 1.25rem;
  }

  .application-section {
    margin: 20px -20px 20px -20px;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 20px 16px 16px 16px;
  }

  .modal-content {
    padding: 0 16px;
  }

  .modal-actions {
    padding: 16px;
  }

  .job-title {
    font-size: 1.125rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .application-section {
    margin: 16px -16px 16px -16px;
    padding: 16px;
  }
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

</style>
