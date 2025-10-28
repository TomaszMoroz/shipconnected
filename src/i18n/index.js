import { createI18n } from 'vue-i18n'
import messages from './full.js'

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
const locale = saved || 'pl'

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'pl',
  messages,
})

export default i18n
