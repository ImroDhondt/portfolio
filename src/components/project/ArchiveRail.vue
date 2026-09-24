<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { Project } from '@/types/content'

/** Metadata column beside the dominant featured project. */
defineProps<{ project: Project }>()

const { t } = useI18n()
const { text } = useLocale()
</script>

<template>
  <dl class="rail">
    <div class="rail__row">
      <dt>{{ t('ownership.label') }}</dt>
      <dd>{{ t(`ownership.${project.ownership}`) }}</dd>
    </div>
    <div class="rail__row">
      <dt>{{ t('projects.role') }}</dt>
      <dd>{{ text(project.role) }}</dd>
    </div>
    <div class="rail__row">
      <dt>{{ t('projects.stack') }}</dt>
      <dd>
        <ul class="rail__stack">
          <li v-for="tech in project.primaryTech" :key="tech">{{ tech }}</li>
        </ul>
      </dd>
    </div>
  </dl>
</template>

<style scoped>
.rail {
  display: grid;
  align-content: start;
  gap: var(--space-5);
  padding: var(--space-5);
  border-left: var(--border-width) solid var(--border);
  background-color: color-mix(in srgb, var(--bg) 55%, transparent);
}

.rail__row {
  display: grid;
  align-content: start;
  gap: var(--space-1);
}

.rail dt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--muted);
}

.rail dd {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--text-soft);
}

.rail__stack {
  display: grid;
  gap: var(--space-1);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.rail__stack li::before {
  content: '+ ';
  color: var(--cyan);
}

@media (max-width: 1079px) {
  .rail {
    border-left: 0;
    border-top: var(--border-width) solid var(--border);
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
}
</style>
