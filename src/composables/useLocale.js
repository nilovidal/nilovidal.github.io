import { ref, computed, watch } from 'vue'
import es from '../i18n/es.js'
import en from '../i18n/en.js'

const STORAGE_KEY = 'portfolio-locale'

const messages = { es, en }
const locale = ref(
  typeof localStorage !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY) || 'es'
    : 'es',
)

watch(locale, (value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, value)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = value
  }
}, { immediate: true })

function get(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export function useLocale() {
  const dict = computed(() => messages[locale.value] ?? messages.es)

  function t(key) {
    const value = get(dict.value, key)
    return value ?? key
  }

  function setLocale(code) {
    if (messages[code]) locale.value = code
  }

  function toggleLocale() {
    locale.value = locale.value === 'es' ? 'en' : 'es'
  }

  return { locale, t, setLocale, toggleLocale }
}
