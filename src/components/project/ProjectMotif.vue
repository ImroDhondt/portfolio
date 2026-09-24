<script setup lang="ts">
import { computed } from 'vue'
import type { MotifKind } from '@/data/archive'
import WorkflowMotif from './motifs/WorkflowMotif.vue'
import StreamMotif from './motifs/StreamMotif.vue'
import HandsetMotif from './motifs/HandsetMotif.vue'
import RoomsMotif from './motifs/RoomsMotif.vue'
import TrailMotif from './motifs/TrailMotif.vue'

/**
 * Abstract drawing that stands in for a project screenshot. These are
 * diagrams of the idea behind each project, never mock interfaces.
 */
const props = defineProps<{ kind: MotifKind; hue: string }>()

const components = {
  workflow: WorkflowMotif,
  stream: StreamMotif,
  handset: HandsetMotif,
  rooms: RoomsMotif,
  trail: TrailMotif,
}

const motif = computed(() => components[props.kind])
</script>

<template>
  <div class="motif" :style="{ '--hue': hue }" aria-hidden="true">
    <component :is="motif" />
  </div>
</template>

<style scoped>
.motif {
  display: block;
  width: 100%;
  height: 100%;
}

.motif :deep(svg) {
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: none;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.motif :deep(.m-dim) {
  stroke: color-mix(in srgb, var(--border) 75%, transparent);
}

.motif :deep(.m-dim-node) {
  fill: var(--bg-elevated);
  stroke: var(--border-strong);
  stroke-dasharray: 3 3;
}

.motif :deep(.m-line) {
  stroke: color-mix(in srgb, var(--hue) 70%, transparent);
}

.motif :deep(.m-node) {
  fill: var(--bg-elevated);
  stroke: var(--border-strong);
}

.motif :deep(.m-node--active) {
  stroke: var(--hue);
}

.motif :deep(.m-fill) {
  fill: var(--hue);
  stroke: none;
}

.motif :deep(.m-faint) {
  opacity: 0.4;
}

/* Lines draw themselves in as the entry scrolls into view. */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .motif :deep(.m-draw) {
      stroke-dasharray: 1;
      animation: draw-line linear both;
      animation-timeline: view();
      animation-range: entry 20% cover 40%;
    }
  }
}

@keyframes draw-line {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
