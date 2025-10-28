<template>
  <div class="career-form">
    <q-card class="q-pa-lg" style="max-width: 600px; margin: 0 auto">
      <q-card-section>
        <div class="row items-center q-mb-md q-col-gutter-md">
          <div class="col-12 col-sm">
            <div class="text-h5 text-weight-bold">{{ $t('career.form.title') }}</div>
          </div>
          <div class="col-12 col-sm-auto q-mt-sm q-mt-none--sm">
            <q-btn
              flat
              icon="arrow_back"
              :label="$t('career.form.backToOffers')"
              color="primary"
              @click="goBack"
            />
          </div>
        </div>
        <div v-if="props.appliedPosition" class="q-mb-md">
          <q-input
            v-model="form.position"
            :label="$t('career.form.positionLabel')"
            readonly
            filled
            color="primary"
          />
        </div>
        <q-form @submit.prevent="submitForm">
          <q-input v-model="form.name" :label="$t('career.form.name')" required class="q-mb-md" />
          <q-input
            v-model="form.birthdate"
            :label="$t('career.form.birthdate')"
            type="date"
            class="q-mb-md"
          />
          <q-input v-model="form.postcode" :label="$t('career.form.postcode')" class="q-mb-md" />
          <q-input v-model="form.city" :label="$t('career.form.city')" class="q-mb-md" />
          <q-input v-model="form.street" :label="$t('career.form.street')" class="q-mb-md" />
          <q-input
            v-model="form.houseNumber"
            :label="$t('career.form.houseNumber')"
            class="q-mb-md"
          />
          <q-input
            v-model="form.email"
            :label="$t('career.form.email')"
            type="email"
            class="q-mb-md"
          />
          <q-input
            v-model="form.phone"
            :label="$t('career.form.phone')"
            type="tel"
            class="q-mb-md"
          />
          <q-select
            v-model="form.education"
            :options="educationOptions"
            :label="$t('career.form.education')"
            class="q-mb-md"
          />
          <q-input
            v-model="form.schoolName"
            :label="$t('career.form.schoolName')"
            class="q-mb-md"
          />
          <q-input
            v-model="form.schoolYear"
            :label="$t('career.form.schoolYear')"
            class="q-mb-md"
          />
          <q-input
            v-model="form.profession"
            :label="$t('career.form.profession')"
            class="q-mb-md"
          />
          <q-input v-model="form.specialty" :label="$t('career.form.specialty')" class="q-mb-md" />
          <q-input v-model="form.title" :label="$t('career.form.titleJob')" class="q-mb-md" />
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input
                  v-model="form.extraEducation[0]"
                  :label="$t('career.form.extraEducation')"
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
                :label="$t('career.form.extraEducation')"
                filled
              />
            </div>
          </div>
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input v-model="form.skills[0]" :label="$t('career.form.skills')" filled />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('skills')" />
            </div>
            <div v-for="(item, idx) in form.skills.slice(1)" :key="'skills' + idx" class="q-mt-sm">
              <q-input v-model="form.skills[idx + 1]" :label="$t('career.form.skills')" filled />
            </div>
          </div>
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input v-model="form.languages[0]" :label="$t('career.form.languages')" filled />
              </div>
              <q-btn round dense icon="add" color="primary" @click="addField('languages')" />
            </div>
            <div
              v-for="(item, idx) in form.languages.slice(1)"
              :key="'languages' + idx"
              class="q-mt-sm"
            >
              <q-input
                v-model="form.languages[idx + 1]"
                :label="$t('career.form.languages')"
                filled
              />
            </div>
          </div>
          <q-input v-model="form.computer" :label="$t('career.form.computer')" class="q-mb-md" />
          <q-input v-model="form.other" :label="$t('career.form.other')" class="q-mb-md" />
          <div class="q-mb-md">
            <div class="row items-center q-gutter-sm">
              <div class="col">
                <q-input
                  v-model="form.experience[0]"
                  :label="$t('career.form.experience')"
                  filled
                />
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
                :label="$t('career.form.experience')"
                filled
              />
            </div>
          </div>
          <div class="q-mt-md">
            <q-btn type="submit" color="primary" :disable="sending">
              <template v-if="sending">
                <q-spinner-dots size="20px" color="white" class="q-mr-sm" />
                {{ $t('career.form.sending') }}
              </template>
              <template v-else> {{ $t('career.form.send') }} </template>
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
const $q = useQuasar()
import { sendJobApplication } from '../services/emailjs.js'
const emit = defineEmits(['backToOffers'])
const props = defineProps({
  appliedPosition: { type: String, default: '' },
  applicationSource: { type: String, default: '' },
})
const sending = ref(false)
const { t } = useI18n()
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
  applicationSource: props.applicationSource || t('career.form.applicationSourceDefault'),
})
const educationOptions = t('career.form.educationOptions') || [
  'primary',
  'vocational',
  'secondary',
  'higher',
]
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
      $q.notify({ type: 'warning', message: t('career.form.fillRequired') })
      return
    }
  }
  sending.value = true
  const textList = (arr) => arr.filter((x) => x).join('\n')
  const params = {
    from_name: form.value.name,
    from_email: form.value.email,
    phone: form.value.phone || '',
    position: form.value.position || t('career.form.notApplicable'),
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
        $q.notify({ type: 'positive', message: t('career.form.sentSuccess') })
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
          message: t('career.form.sentError'),
        })
      }
    })
    .catch(() => {
      sending.value = false
      $q.notify({
        type: 'negative',
        message: t('career.form.sentError'),
      })
    })
}
</script>

<style scoped>
.career-form {
  margin-top: 32px;
}
</style>
