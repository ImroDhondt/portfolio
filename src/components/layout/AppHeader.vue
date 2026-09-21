<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import MainNav from '@/components/navigation/MainNav.vue'

const { routeTo } = useLocale()
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink class="header__brand" :to="routeTo('home')">
        <span class="header__prompt" aria-hidden="true">imro@portfolio:~$</span>
        <span class="header__name">Imro Dhondt</span>
      </RouterLink>
      <MainNav />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: var(--border-width) solid var(--border);
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: 64px;
}

.header__brand {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--text);
}

.header__prompt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--cyan);
}

.header__name {
  font-weight: 600;
  letter-spacing: -0.01em;
}

@media (max-width: 599px) {
  .header__prompt {
    display: none;
  }
}
</style>
