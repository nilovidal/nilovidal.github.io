<script setup>
import { watch } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import CyberDevSection from './components/CyberDevSection.vue'
import SquashLeadership from './components/SquashLeadership.vue'
import MediaSection from './components/MediaSection.vue'
import ContactFooter from './components/ContactFooter.vue'
import { useLocale } from './composables/useLocale.js'

const { locale, t } = useLocale()

watch(
  locale,
  () => {
    document.title = t('meta.title')
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t('meta.description'))
  },
  { immediate: true },
)
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <HeroSection />
      <CyberDevSection />
      <SquashLeadership />
      <MediaSection />
      <ContactFooter />
    </main>
  </div>
</template>
