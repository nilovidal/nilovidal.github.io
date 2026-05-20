<script setup>
defineProps({
  tag: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  accent: { type: String, default: 'cyber' },
})

const tagColor = {
  cyber: 'text-cyber',
  squash: 'text-squash',
  media: 'text-media',
}

const lineColor = {
  cyber: 'from-cyber',
  squash: 'from-squash',
  media: 'from-media',
}
</script>

<template>
  <header class="mb-12 max-w-3xl animate-fade-up">
    <p class="tag-mono mb-3" :class="tagColor[accent]">
      &gt; {{ tag }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {{ title }}
    </h2>
    <div
      class="accent-line mt-4 bg-gradient-to-r to-transparent"
      :class="lineColor[accent]"
    />
    <p v-if="subtitle" class="mt-4 text-lg leading-relaxed text-muted">
      {{ subtitle }}
    </p>
  </header>
</template>
