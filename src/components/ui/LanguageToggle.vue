<script setup>
import { useLocale } from '../../composables/useLocale.js'

const { locale, setLocale } = useLocale()
</script>

<template>
  <div
    class="flex rounded-lg border border-surface-border bg-surface-raised p-0.5 font-mono text-xs"
    role="group"
    :aria-label="locale === 'es' ? 'Idioma' : 'Language'"
  >
    <button
      type="button"
      class="rounded-md px-2.5 py-1 transition"
      :class="locale === 'es' ? 'bg-cyber/20 text-cyber' : 'text-muted hover:text-white'"
      @click="setLocale('es')"
    >
      ES
    </button>
    <button
      type="button"
      class="rounded-md px-2.5 py-1 transition"
      :class="locale === 'en' ? 'bg-cyber/20 text-cyber' : 'text-muted hover:text-white'"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
