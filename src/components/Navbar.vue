<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale.js'
import { navLinks } from '../data/portfolio.js'
import LanguageToggle from './ui/LanguageToggle.vue'

const { t } = useLocale()
const open = ref(false)
const scrolled = ref(false)

function closeMenu() {
  open.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition duration-300"
    :class="scrolled ? 'border-b border-surface-border/80 bg-canvas/90 backdrop-blur-lg' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a
        href="#hero"
        class="font-mono text-sm font-semibold tracking-wide text-white"
        @click="closeMenu"
      >
        NV<span class="text-cyber">.</span>dev
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm text-muted transition hover:text-cyber"
        >
          {{ t(link.key) }}
        </a>
        <LanguageToggle />
      </div>

      <div class="flex items-center gap-3 md:hidden">
        <LanguageToggle />
        <button
          type="button"
          class="rounded-lg border border-surface-border p-2 text-cyber"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <span class="sr-only">Menu</span>
          <svg v-if="!open" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-show="open"
      id="mobile-menu"
      class="border-t border-surface-border bg-canvas/95 px-4 py-4 backdrop-blur-lg md:hidden"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="`#${link.id}`"
        class="block py-2 text-sm text-muted hover:text-cyber"
        @click="closeMenu"
      >
        {{ t(link.key) }}
      </a>
    </div>
  </header>
</template>
