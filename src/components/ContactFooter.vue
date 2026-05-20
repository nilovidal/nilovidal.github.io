<script setup>
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale.js'
import { socialLinks, cvDownloads } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.vue'

const { t, locale } = useLocale()

const cvLinks = computed(() =>
  cvDownloads.map((cv) => ({
    ...cv,
    active: cv.locale === locale.value,
  })),
)
</script>

<template>
  <footer id="contact" class="section-pad border-t border-surface-border/40 pb-10">
    <SectionHeading
      :tag="t('footer.tag')"
      :title="t('footer.title')"
      :subtitle="t('footer.subtitle')"
      accent="cyber"
    />

    <div class="grid gap-8 lg:grid-cols-2">
      <div class="space-y-4">
        <a
          v-for="link in socialLinks"
          :key="link.id"
          :href="link.href"
          class="glass-card flex items-center justify-between p-5 transition hover:border-cyber/50"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          <span class="font-medium text-white">{{ link.label }}</span>
          <span class="font-mono text-xs text-cyber">
            {{ link.external ? '↗' : '→' }}
          </span>
        </a>
        <p class="text-sm text-muted">
          nilo.vidal@gmail.com · Salou & Barcelona
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <a
          v-for="cv in cvLinks"
          :key="cv.locale"
          :href="cv.href"
          download
          class="btn-primary justify-between"
          :class="cv.active ? '' : 'opacity-80'"
        >
          {{ t(cv.labelKey) }}
          <span aria-hidden="true">PDF</span>
        </a>
      </div>
    </div>

    <p class="mt-16 border-t border-surface-border/40 pt-8 text-center font-mono text-xs text-muted">
      © {{ new Date().getFullYear() }} Nilo Vidal Herrera — {{ t('footer.rights') }}
    </p>
  </footer>
</template>
