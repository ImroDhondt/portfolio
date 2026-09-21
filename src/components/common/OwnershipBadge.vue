<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Ownership } from '@/types/content'

defineProps<{ ownership: Ownership; teamLabel?: string; short?: boolean }>()
const { t } = useI18n()
</script>

<template>
  <span class="ownership" :class="`ownership--${ownership}`">
    {{ short ? t(`ownership.${ownership}Short`) : t(`ownership.${ownership}`) }}
    <template v-if="teamLabel">&middot; {{ teamLabel }}</template>
  </span>
</template>

<style scoped>
.ownership {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 2px var(--space-3);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--muted);
}

.ownership--team {
  color: var(--blue);
  border-color: color-mix(in srgb, var(--blue) 40%, var(--border));
}
</style>
