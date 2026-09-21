<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { LOCALES, type Locale } from '@/types/content'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { locale } = useLocale()
const route = useRoute()
const router = useRouter()

function switchTo(target: Locale) {
  if (target === locale.value) return
  void router.push({
    name: route.name ?? 'home',
    params: { ...route.params, locale: target },
    query: route.query,
    hash: route.hash,
  })
}
</script>

<template>
  <div class="locale" role="group" :aria-label="t('locale.label')">
    <button
      v-for="option in LOCALES"
      :key="option"
      type="button"
      class="locale__button"
      :class="{ 'locale__button--active': option === locale }"
      :aria-pressed="option === locale"
      :title="t('locale.switchTo', { language: t(`locale.${option}`) })"
      @click="switchTo(option)"
    >
      <span aria-hidden="true">{{ option.toUpperCase() }}</span>
      <span class="visually-hidden">{{ t(`locale.${option}`) }}</span>
    </button>
  </div>
</template>

<style scoped>
.locale {
  display: inline-flex;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.locale__button {
  padding: var(--space-1) var(--space-3);
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  color: var(--muted);
  transition: color var(--transition), background-color var(--transition);
}

.locale__button + .locale__button {
  border-left: var(--border-width) solid var(--border);
}

.locale__button:hover {
  color: var(--text);
  background-color: var(--surface-elevated);
}

.locale__button--active {
  color: var(--bg);
  background-color: var(--cyan);
}

.locale__button--active:hover {
  color: var(--bg);
  background-color: var(--cyan-bright);
}
</style>
