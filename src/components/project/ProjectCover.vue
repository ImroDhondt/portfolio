<script setup lang="ts">
import { computed } from 'vue'
import { archiveEntry } from '@/data/archive'
import type { Project } from '@/types/content'
import ProjectMotif from './ProjectMotif.vue'

const props = defineProps<{ project: Project }>()

/**
 * Cover art for cards and detail pages.
 *
 * No real screenshots exist yet, and a mocked-up interface would be a
 * fabricated screenshot. Instead each project gets its archive motif: an
 * abstract diagram of the idea behind it.
 */
const entry = computed(() => archiveEntry(props.project.slug))
</script>

<template>
  <div class="cover" :style="{ '--hue': entry.hue }" aria-hidden="true">
    <ProjectMotif class="cover__motif" :kind="entry.motif" :hue="entry.hue" />
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  aspect-ratio: 16 / 7;
  overflow: hidden;
  padding: var(--space-4) var(--space-5);
  background-color: var(--bg-elevated);
  background-image: radial-gradient(rgba(139, 154, 170, 0.12) 1px, transparent 1px);
  background-size: 14px 14px;
  border-bottom: var(--border-width) solid var(--border);
}


.cover > .cover__motif {
  position: absolute;
  inset: var(--space-5) var(--space-6);
  width: auto;
  height: auto;
}
</style>
