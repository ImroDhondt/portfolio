<script setup lang="ts">
import type { Project } from '@/types/content'
import type { ArchiveVariant } from '@/data/archive'
import ArchiveCard from './ArchiveCard.vue'

/**
 * Featured projects as an archive, not a uniform grid: the first entry
 * dominates, the next two follow at medium weight, the rest are compact.
 */
defineProps<{ projects: Project[] }>()

const variants: ArchiveVariant[] = ['feature', 'wide', 'tall', 'compact', 'compact']

function variantAt(index: number): ArchiveVariant {
  return variants[index] ?? 'compact'
}
</script>

<template>
  <ol class="archive swipe-row">
    <li
      v-for="(project, index) in projects"
      :key="project.slug"
      :class="index < variants.length ? `slot-${index}` : undefined"
    >
      <ArchiveCard :project="project" :index="index" :variant="variantAt(index)" />
    </li>
  </ol>
</template>

<style scoped>
@media (min-width: 720px) {
  .slot-0 { grid-area: e0; }
  .slot-1 { grid-area: e1; }
  .slot-2 { grid-area: e2; }
  .slot-3 { grid-area: e3; }
  .slot-4 { grid-area: e4; }

  .archive {
    display: grid;
    gap: var(--space-5);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'e0 e0'
      'e1 e1'
      'e2 e3'
      'e2 e4';
  }
}

@media (min-width: 1080px) {
  .archive {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-areas:
      'e0 e0 e0 e0 e0 e0 e0 e0 e0 e0 e0 e0'
      'e1 e1 e1 e1 e1 e1 e1 e1 e2 e2 e2 e2'
      'e3 e3 e3 e3 e4 e4 e4 e4 e2 e2 e2 e2';
  }
}
</style>
