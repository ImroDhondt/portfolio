<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types/content'

const props = defineProps<{ project: Project }>()

/**
 * Generated cover art.
 *
 * No real screenshots exist yet, and a mocked-up interface would be a
 * fabricated screenshot. Instead each project gets a deterministic abstract
 * cover derived from its own slug, so the grid stays readable without
 * pretending to show a product that the visitor cannot verify.
 */
function seedOf(slug: string): number {
  let hash = 0
  for (const char of slug) {
    hash = (hash * 31 + char.charCodeAt(0)) % 100000
  }
  return hash
}

const seed = computed(() => seedOf(props.project.slug))
const rotation = computed(() => 20 + (seed.value % 5) * 12)
const spacing = computed(() => 10 + (seed.value % 4) * 4)
const cells = computed(() => {
  // A small deterministic pattern of filled cells, unique per project.
  const value = seed.value
  return Array.from({ length: 24 }, (_, index) => ((value >> index % 12) + index * 7) % 5 === 0)
})
const initials = computed(() =>
  props.project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join(''),
)
</script>

<template>
  <div
    class="cover"
    :style="{
      '--cover-rotation': `${rotation}deg`,
      '--cover-spacing': `${spacing}px`,
    }"
    aria-hidden="true"
  >
    <div class="cover__stripes"></div>
    <div class="cover__cells">
      <span v-for="(filled, index) in cells" :key="index" :class="{ 'cover__cell--on': filled }"></span>
    </div>
    <span class="cover__initials">{{ initials }}</span>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  aspect-ratio: 16 / 7;
  overflow: hidden;
  background-color: var(--surface-elevated);
  border-bottom: var(--border-width) solid var(--border);
}

.cover__stripes {
  position: absolute;
  inset: -20%;
  background-image: repeating-linear-gradient(
    var(--cover-rotation),
    var(--cyan-faint) 0 1px,
    transparent 1px var(--cover-spacing)
  );
}

.cover__cells {
  position: absolute;
  inset: auto var(--space-4) var(--space-4) auto;
  display: grid;
  grid-template-columns: repeat(6, 8px);
  gap: 4px;
}

.cover__cells span {
  width: 8px;
  height: 8px;
  border: 1px solid var(--border-strong);
  border-radius: 1px;
}

.cover__cell--on {
  background-color: var(--cyan);
  border-color: var(--cyan);
}

.cover__initials {
  position: absolute;
  left: var(--space-4);
  bottom: var(--space-3);
  font-family: var(--font-mono);
  font-size: 2.6rem;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: color-mix(in srgb, var(--text) 18%, transparent);
}
</style>
