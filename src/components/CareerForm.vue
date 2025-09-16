<template>
  <div class="career-form">
    <q-card class="q-pa-lg" style="max-width: 600px; margin: 0 auto">
      <q-card-section>
        <div class="row items-center q-mb-md">
          <div class="col">
            <div class="text-h5 text-weight-bold">Kwestionariusz osobowy</div>
          </div>
          <div class="col-auto">
            <q-btn flat icon="arrow_back" label="Powrót do ofert" color="primary" @click="goBack" />
          </div>
        </div>
        <q-form @submit.prevent="submitForm">
          <q-input v-model="form.name" label="Imię i nazwisko" required class="q-mb-md" />
          <q-input v-model="form.birthdate" label="Data urodzenia" type="date" class="q-mb-md" />
          <q-input v-model="form.postcode" label="Kod pocztowy" class="q-mb-md" />
          <q-input v-model="form.city" label="Miejscowość" class="q-mb-md" />
          <q-input v-model="form.street" label="Ulica" class="q-mb-md" />
          <q-input v-model="form.houseNumber" label="Nr domu / mieszkania" class="q-mb-md" />
          <q-input v-model="form.email" label="Telefon / e-mail" class="q-mb-md" />
          <q-select
            v-model="form.education"
            :options="educationOptions"
            label="Wykształcenie"
            class="q-mb-md"
          />
          <q-input v-model="form.schoolName" label="Nazwa szkoły" class="q-mb-md" />
          <q-input v-model="form.schoolYear" label="Rok ukończenia" class="q-mb-md" />
          <q-input v-model="form.profession" label="Zawód" class="q-mb-md" />
          <q-input v-model="form.specialty" label="Specjalność" class="q-mb-md" />
          <q-input v-model="form.title" label="Tytuł zawodowy / naukowy" class="q-mb-md" />
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input
                  v-model="form.extraEducation[0]"
                  label="Kurs / studia podyplomowe"
                  filled
                />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('extraEducation')" />
            </div>
            <div
              v-for="(item, idx) in form.extraEducation.slice(1)"
              :key="'extraEducation' + idx"
              class="q-mt-sm"
            >
              <q-input
                v-model="form.extraEducation[idx + 1]"
                label="Kurs / studia podyplomowe"
                filled
              />
            </div>
          </div>
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input v-model="form.skills[0]" label="Umiejętność / uprawnienie" filled />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('skills')" />
            </div>
            <div v-for="(item, idx) in form.skills.slice(1)" :key="'skills' + idx" class="q-mt-sm">
              <q-input v-model="form.skills[idx + 1]" label="Umiejętność / uprawnienie" filled />
            </div>
          </div>
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input v-model="form.languages[0]" label="Język obcy" filled />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('languages')" />
            </div>
            <div
              v-for="(item, idx) in form.languages.slice(1)"
              :key="'languages' + idx"
              class="q-mt-sm"
            >
              <q-input v-model="form.languages[idx + 1]" label="Język obcy" filled />
            </div>
          </div>
          <q-input v-model="form.computer" label="Obsługa komputera" class="q-mb-md" />
          <q-input v-model="form.other" label="Inne" class="q-mb-md" />
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input v-model="form.experience[0]" label="Zatrudnienie / stanowisko" filled />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('experience')" />
            </div>
            <div
              v-for="(item, idx) in form.experience.slice(1)"
              :key="'experience' + idx"
              class="q-mt-sm"
            >
              <q-input
                v-model="form.experience[idx + 1]"
                label="Zatrudnienie / stanowisko"
                filled
              />
            </div>
          </div>
          <div class="q-mt-md">
            <q-btn type="submit" color="primary" label="Wyślij" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['backToOffers'])
function goBack() {
  emit('backToOffers')
}
const form = ref({
  name: '',
  birthdate: '',
  postcode: '',
  city: '',
  street: '',
  houseNumber: '',
  email: '',
  education: '',
  schoolName: '',
  schoolYear: '',
  profession: '',
  specialty: '',
  title: '',
  extraEducation: [''],
  skills: [''],
  languages: [''],
  computer: '',
  other: '',
  experience: [''],
})
const educationOptions = ['podstawowe', 'zawodowe', 'średnie', 'wyższe']
function addField(field) {
  if (Array.isArray(form.value[field])) {
    form.value[field].push('')
  }
}
function submitForm() {
  // TODO: handle form submission
}
</script>

<style scoped>
.career-form {
  margin-top: 32px;
}
</style>
