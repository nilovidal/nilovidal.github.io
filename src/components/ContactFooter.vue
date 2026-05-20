<script setup>
import { useLocale } from '../composables/useLocale.js'
import { socialLinks } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.vue'

const { t } = useLocale()

const linkedIn = socialLinks.find((link) => link.id === 'linkedin')
</script>

<template>
  <footer id="contact" class="section-pad border-t border-surface-border/40 pb-10">
    <SectionHeading
      :tag="t('footer.tag')"
      :title="t('footer.title')"
      :subtitle="t('footer.subtitle')"
      accent="cyber"
    />

    <a
      v-if="linkedIn"
      :href="linkedIn.href"
      class="glass-card flex max-w-md items-center justify-between p-5 transition hover:border-cyber/50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="font-medium text-white">{{ linkedIn.label }}</span>
      <span class="font-mono text-xs text-cyber" aria-hidden="true">↗</span>
    </a>

    <p class="mt-16 border-t border-surface-border/40 pt-8 text-center font-mono text-xs text-muted">
      © {{ new Date().getFullYear() }} Nilo Vidal Herrera — {{ t('footer.rights') }}
    </p>
  </footer>
</template>
