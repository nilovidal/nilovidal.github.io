<script setup>
import { useLocale } from '../composables/useLocale.js'
import { mediaProjects } from '../data/portfolio.js'
import SectionHeading from './ui/SectionHeading.vue'
const { t } = useLocale()

const businessImg = '/media/nilo_business.jpg'
const playingImg = '/media/nilo_playing.jpg'

const tagStyles = {
  prime: 'from-red-600/30 to-amber-600/20 text-red-300',
  tv: 'from-violet-600/30 to-cyan-600/20 text-media',
}
</script>

<template>
  <section id="media" class="section-pad border-t border-surface-border/40">
    <SectionHeading
      :tag="t('media.tag')"
      :title="t('media.title')"
      :subtitle="t('media.subtitle')"
      accent="media"
    />

    <div class="mb-12 grid gap-4 sm:grid-cols-2">
      <div class="glass-card group overflow-hidden">
        <img
          :src="businessImg"
          alt="Nilo Vidal — producción audiovisual"
          class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          width="600"
          height="400"
        />
      </div>
      <div class="glass-card group overflow-hidden">
        <img
          :src="playingImg"
          alt="Nilo Vidal — squash y medios"
          class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          width="600"
          height="400"
        />
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in mediaProjects"
        :key="project.id"
        class="glass-card relative overflow-hidden p-8"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-40"
          :class="tagStyles[project.tag]"
          aria-hidden="true"
        />
        <div class="relative">
          <span
            class="inline-block rounded-full border border-media/40 bg-media/10 px-3 py-0.5 font-mono text-xs text-media"
          >
            {{ t(project.yearKey) }}
          </span>
          <h3 class="mt-4 text-xl font-bold text-white">
            {{ t(project.titleKey) }}
          </h3>
          <p class="mt-1 text-sm text-media">{{ t(project.roleKey) }}</p>
          <p class="mt-4 text-sm leading-relaxed text-slate-300">
            {{ t(project.descKey) }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
