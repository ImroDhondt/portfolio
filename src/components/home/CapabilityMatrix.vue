<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { capabilities } from '@/data/capabilities'
import { findProject } from '@/data/projects'

/** Capability groups as matrix rows, each pointing at the projects behind it. */
const { t } = useI18n()
const { text, routeTo } = useLocale()

function projectsFor(slugs: string[]) {
  return slugs.flatMap((slug) => findProject(slug) ?? [])
}
</script>

<template>
  <ul class="matrix">
    <li v-for="(capability, index) in capabilities" :key="capability.key" class="matrix__row reveal">
      <p class="matrix__key" aria-hidden="true">
        {{ String(index + 1).padStart(2, '0') }} · {{ capability.key }}
      </p>
      <h3 class="matrix__title">{{ text(capability.title) }}</h3>
      <ul class="matrix__items">
        <li v-for="item in text(capability.items)" :key="item">{{ item }}</li>
      </ul>
      <p class="matrix__evidence">
        <span class="matrix__evidence-label">{{ t('home.evidenceFrom') }}</span>
        <template v-for="(project, i) in projectsFor(capability.evidence)" :key="project.slug">
          <span v-if="i > 0" aria-hidden="true"> · </span>
          <RouterLink :to="routeTo('project', { slug: project.slug })">{{ project.title }}</RouterLink>
        </template>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.matrix {
  border-top: var(--border-width) solid var(--border-strong);
}

.matrix__row {
  display: grid;
  gap: var(--space-2) var(--space-6);
  padding-block: var(--space-5);
  border-bottom: var(--border-width) solid var(--border);
}

@media (min-width: 900px) {
  .matrix__row {
    grid-template-columns: 9rem minmax(0, 15rem) minmax(0, 1fr);
    grid-template-areas:
      'key title items'
      'key title evidence';
    align-items: start;
  }

  .matrix__key { grid-area: key; }
  .matrix__title { grid-area: title; }
  .matrix__items { grid-area: items; }
  .matrix__evidence { grid-area: evidence; }
}

.matrix__key {
  padding-top: 0.3em;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--cyan);
}

.matrix__title {
  font-size: var(--text-xl);
}

.matrix__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1) 0;
  color: var(--text-soft);
}

.matrix__items li:not(:last-child)::after {
  content: '·';
  margin-inline: var(--space-3);
  color: var(--border-strong);
}

.matrix__evidence {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.matrix__evidence-label {
  margin-right: var(--space-2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.matrix__evidence a {
  color: var(--text-soft);
  text-decoration-color: var(--border-strong);
}

.matrix__evidence a:hover {
  color: var(--cyan-bright);
}
</style>
