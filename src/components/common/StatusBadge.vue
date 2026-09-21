<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ProjectStatus } from '@/types/content'

const props = defineProps<{ status: ProjectStatus }>()
const { t } = useI18n()

/**
 * Colour is a secondary signal only: the badge always carries its label in
 * text, so nothing here depends on the visitor seeing the hue.
 */
const tone = computed(() => {
  switch (props.status) {
    case 'completed':
    case 'deployment-ready':
      return 'done'
    case 'active-development':
    case 'later-development':
    case 'public-playtest':
      return 'active'
    case 'early-development':
    case 'prototype':
      return 'early'
    default:
      return 'neutral'
  }
})
</script>

<template>
  <span class="badge" :class="`badge--${tone}`">
    <span class="badge__dot" aria-hidden="true"></span>
    {{ t(`status.${status}`) }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 2px var(--space-3);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  white-space: nowrap;
  color: var(--text);
}

.badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
}

.badge--done {
  color: var(--success);
  border-color: color-mix(in srgb, var(--success) 40%, var(--border));
}

.badge--active {
  color: var(--cyan);
  border-color: color-mix(in srgb, var(--cyan) 40%, var(--border));
}

.badge--early {
  color: var(--warning);
  border-color: color-mix(in srgb, var(--warning) 40%, var(--border));
}

.badge--neutral {
  color: var(--muted);
}
</style>
