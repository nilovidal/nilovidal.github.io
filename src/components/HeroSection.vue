<script setup>
import { useLocale } from '../composables/useLocale.js'
import { heroFacets } from '../data/portfolio.js'
import heroFigure from '../assets/hero.png'

const portraitImg = '/media/nilo_business_nobg.png.png'

const { t } = useLocale()

const facetColors = {
  cyber: 'border-cyber/40 bg-cyber/10 text-cyber',
  squash: 'border-squash/40 bg-squash/10 text-squash',
  media: 'border-media/40 bg-media/10 text-media',
}
</script>

<template>
  <section id="hero" class="section-pad pt-28 lg:pt-36">
    <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="animate-fade-up">
        <p class="tag-mono mb-4">{{ t('hero.tag') }}</p>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-2 font-mono text-lg text-cyber sm:text-xl">
          {{ t('hero.subtitle') }}
        </p>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {{ t('hero.lead') }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="facet in heroFacets"
            :key="facet.key"
            class="rounded-full border px-3 py-1 text-xs font-medium"
            :class="facetColors[facet.color]"
          >
            {{ t(facet.key) }}
          </span>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#cyber" class="btn-primary">{{ t('hero.ctaCyber') }}</a>
          <a href="#squash" class="btn-ghost">{{ t('hero.ctaSquash') }}</a>
          <a href="#contact" class="btn-ghost">{{ t('hero.ctaContact') }}</a>
        </div>

        <p class="mt-8 font-mono text-xs text-muted">
          {{ t('hero.builtWith') }}
          <span class="text-cyber">Vue 3</span>
          · Vite · Tailwind
        </p>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div
          class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyber/20 via-transparent to-media/20 blur-2xl"
          aria-hidden="true"
        />
        <div class="glass-card relative aspect-[4/5] w-full overflow-hidden">
          <img
            :src="heroFigure"
            alt=""
            aria-hidden="true"
            class="hero-figure absolute inset-0 h-full w-full object-cover object-top"
          />

          <div class="hero-portrait-glow" aria-hidden="true" />

          <img
            :src="portraitImg"
            alt="Nilo Vidal"
            class="hero-portrait absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-[96%] object-contain object-bottom"
            width="400"
            height="500"
          />

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface via-surface/55 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-figure {
  opacity: 0.78;
}

.hero-portrait-glow {
  position: absolute;
  left: 50%;
  top: 48%;
  width: 70%;
  height: 60%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    closest-side,
    rgba(79, 195, 247, 0.38),
    rgba(167, 139, 250, 0.22) 55%,
    transparent 80%
  );
  filter: blur(36px);
  pointer-events: none;
}

.hero-portrait {
  transform: scale(1.55);
  transform-origin: 50% 92%;
  filter:
    contrast(1.04)
    saturate(0.98)
    drop-shadow(0 0 22px rgba(79, 195, 247, 0.35))
    drop-shadow(0 0 48px rgba(167, 139, 250, 0.25))
    drop-shadow(0 14px 28px rgba(0, 0, 0, 0.55));
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 62%,
    rgba(0, 0, 0, 0.6) 82%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 62%,
    rgba(0, 0, 0, 0.6) 82%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
