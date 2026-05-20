<script setup>
import { useLocale } from '../composables/useLocale.js'
import { squashTimeline, governanceRoles } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.vue'
const { t } = useLocale()

const squashImg = '/media/nilo_squash.jpg'
</script>

<template>
  <section id="squash" class="section-pad border-t border-surface-border/40">
    <SectionHeading
      :tag="t('squash.tag')"
      :title="t('squash.title')"
      :subtitle="t('squash.subtitle')"
      accent="squash"
    />

    <div class="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div class="glass-card overflow-hidden border-squash/30">
        <img
          :src="squashImg"
          alt="Nilo Vidal — squash profesional"
          class="h-56 w-full object-cover object-center sm:h-72 lg:h-full lg:min-h-[320px]"
          width="600"
          height="400"
        />
      </div>

      <div class="glass-card border-squash/30 p-6 sm:p-8">
        <p class="tag-mono text-squash">{{ t('squash.athleteTitle') }}</p>
        <h3 class="mt-2 text-xl font-bold text-white">
          {{ t('squash.athleteRole') }}
        </h3>
        <p class="mt-1 font-mono text-xs text-muted">
          {{ t('squash.athletePeriod') }}
        </p>
        <p class="mt-4 leading-relaxed text-slate-300">
          {{ t('squash.athleteDesc') }}
        </p>
      </div>
    </div>

    <h3 class="tag-mono mb-8 text-muted">{{ t('squash.timelineTitle') }}</h3>
    <ol class="relative space-y-0 border-l border-squash/30 pl-8">
      <li
        v-for="(item, index) in squashTimeline"
        :key="item.year"
        class="relative pb-10 last:pb-0"
      >
        <span
          class="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full border-2 border-squash bg-surface font-mono text-xs font-bold text-squash"
        >
          {{ item.year.slice(2) }}
        </span>
        <div
          class="glass-card p-5 transition hover:border-squash/40"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h4 class="font-semibold text-white">{{ t(item.titleKey) }}</h4>
            <span class="font-mono text-xs text-squash-dim">{{ item.year }}</span>
          </div>
          <p class="mt-2 text-sm text-slate-300">{{ t(item.descKey) }}</p>
          <p class="mt-2 text-xs text-muted">{{ t(item.orgKey) }}</p>
        </div>
      </li>
    </ol>

    <div class="mt-16">
      <h3 class="tag-mono mb-6 text-muted">{{ t('squash.governanceTitle') }}</h3>
      <ul class="grid gap-3 sm:grid-cols-2">
        <li
          v-for="role in governanceRoles"
          :key="role.key"
          class="glass-card flex gap-3 border-squash/20 p-4 text-sm text-slate-300"
        >
          <span class="mt-0.5 text-squash" aria-hidden="true">◆</span>
          {{ t(role.key) }}
        </li>
      </ul>
    </div>
  </section>
</template>
