<template>
  <div class="career-form">
    <q-card class="q-pa-lg" style="max-width: 600px; margin: 0 auto">
      <q-card-section>
        <div class="row items-center q-mb-md q-col-gutter-md">
          <div class="col-12 col-sm">
            <div class="text-h5 text-weight-bold">Kwestionariusz osobowy</div>
          </div>
          <div class="col-12 col-sm-auto q-mt-sm q-mt-none--sm">
            <q-btn flat icon="arrow_back" label="Powrót do ofert" color="primary" @click="goBack" />
          </div>
        </div>
        <div v-if="props.appliedPosition" class="q-mb-md">
          <q-input v-model="form.position" :label="'Stanowisko'" readonly filled color="primary" />
        </div>
        <q-form @submit.prevent="submitForm">
          <q-input v-model="form.name" label="Imię i nazwisko" required class="q-mb-md" />
          <q-input v-model="form.birthdate" label="Data urodzenia" type="date" class="q-mb-md" />
          <q-input v-model="form.postcode" label="Kod pocztowy" class="q-mb-md" />
          <q-input v-model="form.city" label="Miejscowość" class="q-mb-md" />
          <q-input v-model="form.street" label="Ulica" class="q-mb-md" />
          <q-input v-model="form.houseNumber" label="Nr domu / mieszkania" class="q-mb-md" />
          <q-input v-model="form.email" label="E-mail" type="email" class="q-mb-md" />
          <q-input v-model="form.phone" label="Telefon" type="tel" class="q-mb-md" />
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
            <q-btn type="submit" color="primary" :disable="sending">
              <template v-if="sending">
                <q-spinner-dots size="20px" color="white" class="q-mr-sm" />
                Wysyłanie...
              </template>
              <template v-else> Wyślij </template>
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
import { sendJobApplication } from '../services/emailjs.js'
const emit = defineEmits(['backToOffers'])
const props = defineProps({
  appliedPosition: { type: String, default: '' },
  applicationSource: { type: String, default: '' },
})
const sending = ref(false)
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
  phone: '',
  education: '',
  schoolName: '',
  schoolYear: '',
  profession: '',
  position: props.appliedPosition || '',
  specialty: '',
  title: '',
  extraEducation: [''],
  skills: [''],
  languages: [''],
  computer: '',
  other: '',
  experience: [''],
  applicationSource: props.applicationSource || 'Oferta ze strony',
})
const educationOptions = ['podstawowe', 'zawodowe', 'średnie', 'wyższe']
function addField(field) {
  if (Array.isArray(form.value[field])) {
    form.value[field].push('')
  }
}
function submitForm() {
  // Walidacja wymaganych pól
  const requiredFields = [
    'name',
    'birthdate',
    'postcode',
    'city',
    'street',
    'houseNumber',
    'email',
    'phone',
  ]
  for (const field of requiredFields) {
    if (
      !form.value[field] ||
      (typeof form.value[field] === 'string' && form.value[field].trim() === '')
    ) {
      $q.notify({ type: 'warning', message: 'Wypełnij wszystkie obowiązkowe pola!' })
      return
    }
  }
  sending.value = true
  const textList = (arr) => arr.filter((x) => x).join('\n')
  const params = {
    from_name: form.value.name,
    from_email: form.value.email,
    phone: form.value.phone || '',
    position: form.value.position || 'Nie dotyczy',
    profession: form.value.profession,
    experience: textList(form.value.experience),
    extraEducation: textList(form.value.extraEducation),
    skills: textList(form.value.skills),
    languages: textList(form.value.languages),
    city: form.value.city,
    street: form.value.street,
    postcode: form.value.postcode,
    birthdate: form.value.birthdate,
    education: form.value.education,
    schoolName: form.value.schoolName,
    schoolYear: form.value.schoolYear,
    specialty: form.value.specialty,
    title: form.value.title,
    computer: form.value.computer,
    applicationSource: form.value.applicationSource,
    other: form.value.other,
  }
  sendJobApplication(params)
    .then((res) => {
      sending.value = false
      if (res && res.success) {
        $q.notify({ type: 'positive', message: 'Aplikacja została wysłana!' })
        Object.keys(form.value).forEach((key) => {
          if (Array.isArray(form.value[key])) {
            form.value[key] = ['']
          } else {
            form.value[key] = ''
          }
        })
        emit('backToOffers')
      } else {
        $q.notify({
          type: 'negative',
          message: 'Wystąpił błąd podczas wysyłania aplikacji. Spróbuj ponownie.',
        })
      }
    })
    .catch(() => {
      sending.value = false
      $q.notify({
        type: 'negative',
        message: 'Wystąpił błąd podczas wysyłania aplikacji. Spróbuj ponownie.',
      })
    })
}
</script>

<style scoped>
.career-form {
  margin-top: 32px;
}
</style>
