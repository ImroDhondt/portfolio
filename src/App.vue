<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import GridBackdrop from '@/components/layout/GridBackdrop.vue'

const { t } = useI18n()
</script>

<template>
  <GridBackdrop />
  <a class="skip-link" href="#main">{{ t('nav.skipToContent') }}</a>
  <AppHeader />
  <main id="main" tabindex="-1">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </main>
  <AppFooter />
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: var(--space-4);
  top: var(--space-2);
  z-index: 40;
  padding: var(--space-2) var(--space-4);
  background-color: var(--surface-elevated);
  border: var(--border-width) solid var(--cyan);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-decoration: none;
  transform: translateY(-200%);
  transition: transform var(--transition);
}

.skip-link:focus-visible {
  transform: translateY(0);
}

main:focus {
  outline: none;
}
</style>
