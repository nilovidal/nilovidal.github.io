<script setup>
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale.js'
import {
  experiences,
  education,
  certifications,
  techStack,
} from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.vue'

const { t } = useLocale()

function bullets(key) {
  const list = t(key)
  return Array.isArray(list) ? list : []
}

const featuredCerts = computed(() =>
  certifications.filter((c) => c.featured),
)
const otherCerts = computed(() =>
  certifications.filter((c) => !c.featured),
)
</script>

<template>
  <section id="cyber" class="section-pad border-t border-surface-border/40">
    <SectionHeading
      :tag="t('cyber.tag')"
      :title="t('cyber.title')"
      :subtitle="t('cyber.subtitle')"
      accent="cyber"
    />

    <div
      class="glass-card mb-12 flex flex-col gap-4 border-cyber/30 p-6 sm:flex-row sm:items-center"
    >
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyber/15 font-mono text-lg font-bold text-cyber"
      >
        V
      </div>
      <p class="text-sm leading-relaxed text-slate-300 sm:text-base">
        {{ t('cyber.vueHighlight') }}
      </p>
    </div>

    <h3 class="tag-mono mb-6 text-muted">{{ t('cyber.experienceTitle') }}</h3>
    <div class="mb-16 grid gap-4 md:grid-cols-2">
      <article
        v-for="job in experiences"
        :key="job.id"
        class="glass-card p-6 transition hover:border-cyber/40"
        :class="job.featured ? 'border-cyber/50 md:col-span-2' : ''"
      >
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h4 class="text-lg font-semibold text-white">
              {{ t(job.roleKey) }}
            </h4>
            <p class="text-cyber">{{ t(job.companyKey) }}</p>
          </div>
          <span class="font-mono text-xs text-muted">{{ t(job.periodKey) }}</span>
        </div>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li
            v-for="(item, i) in bullets(job.bulletsKey)"
            :key="i"
            class="flex gap-2"
          >
            <span class="text-cyber" aria-hidden="true">›</span>
            {{ item }}
          </li>
        </ul>
      </article>
    </div>

    <div class="grid gap-12 lg:grid-cols-2">
      <div>
        <h3 class="tag-mono mb-6 text-muted">{{ t('cyber.educationTitle') }}</h3>
        <ul class="space-y-4">
          <li
            v-for="(item, i) in education"
            :key="i"
            class="glass-card border-l-2 border-l-cyber/50 p-5"
          >
            <p class="font-medium text-white">{{ t(item.degreeKey) }}</p>
            <p class="text-sm text-muted">{{ t(item.schoolKey) }}</p>
            <p class="mt-1 font-mono text-xs text-cyber-dim">
              {{ t(item.periodKey) }}
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="tag-mono mb-6 text-muted">{{ t('cyber.certsTitle') }}</h3>
        <div class="mb-6 grid gap-4 sm:grid-cols-2">
          <div
            v-for="cert in featuredCerts"
            :key="cert.id"
            class="glass-card flex flex-col items-center border-cyber/40 p-6 text-center"
          >
            <div
              class="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyber/60 bg-surface-raised"
              :class="cert.badge === 'cisco' ? 'text-cyber' : 'text-squash'"
            >
              <span class="font-mono text-[10px] font-bold leading-tight">
                {{ cert.badge === 'cisco' ? 'CCST' : 'IT' }}
              </span>
            </div>
            <p class="text-sm font-semibold text-white">{{ t(cert.nameKey) }}</p>
            <p class="mt-1 text-xs text-muted">{{ t(cert.issuerKey) }}</p>
          </div>
        </div>
        <ul class="space-y-2">
          <li
            v-for="cert in otherCerts"
            :key="cert.id"
            class="flex items-center justify-between rounded-lg border border-surface-border/50 bg-surface/50 px-4 py-3 text-sm"
            :class="cert.highlight ? 'border-cyber/40 text-cyber' : 'text-slate-300'"
          >
            <span>{{ t(cert.nameKey) }}</span>
            <span class="text-xs text-muted">{{ t(cert.issuerKey) }}</span>
          </li>
        </ul>

        <h3 class="tag-mono mb-4 mt-10 text-muted">{{ t('cyber.stackTitle') }}</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 font-mono text-xs"
            :class="tech === 'Vue.js' ? 'border-cyber/60 text-cyber shadow-cyber' : 'text-slate-300'"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
