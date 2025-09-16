<template>
  <div class="career-form">
    <q-card class="q-pa-lg" style="max-width: 600px; margin: 0 auto">
      <q-card-section>
        <div class="text-h5 text-weight-bold q-mb-md">Kwestionariusz osobowy</div>
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
          <q-input
            v-model="form.extraEducation"
            label="Wykształcenie uzupełniające (kursy, studia podyplomowe)"
            class="q-mb-md"
          />
          <q-input
            v-model="form.skills"
            label="Dodatkowe uprawnienia, umiejętności, zainteresowania"
            class="q-mb-md"
          />
          <q-input
            v-model="form.languages"
            label="Stopień znajomości języków obcych"
            class="q-mb-md"
          />
          <q-input v-model="form.computer" label="Obsługa komputera" class="q-mb-md" />
          <q-input v-model="form.other" label="Inne" class="q-mb-md" />
          <q-input
            v-model="form.experience"
            label="Przebieg dotychczasowego zatrudnienia"
            type="textarea"
            class="q-mb-md"
          />
          <div class="q-mt-md">
            <q-btn type="submit" color="primary" label="Wyślij" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
  extraEducation: '',
  skills: '',
  languages: '',
  computer: '',
  other: '',
  experience: '',
})
const educationOptions = ['podstawowe', 'zawodowe', 'średnie', 'wyższe']
function submitForm() {
  // TODO: handle form submission
}
</script>

<style scoped>
.career-form {
  margin-top: 32px;
}
</style>
