<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()
const { routeTo } = useLocale()

useSeo({
  title: () => t('meta.notFound'),
  description: () => t('notFound.body'),
})
</script>

<template>
  <div class="container container--narrow not-found">
    <p class="mono-label" aria-hidden="true">404 //</p>
    <h1>{{ t('notFound.title') }}</h1>
    <p class="not-found__body">{{ t('notFound.body') }}</p>
    <RouterLink class="not-found__link" :to="routeTo('home')">{{ t('actions.goHome') }} →</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-9);
  justify-items: start;
}

.not-found__body {
  color: var(--muted);
}

.not-found__link {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
