<script setup lang="ts">
import type { Project } from '@/types/content'
import ProjectCard from './ProjectCard.vue'

defineProps<{ projects: Project[] }>()
</script>

<template>
  <ul class="grid">
    <li v-for="project in projects" :key="project.slug">
      <ProjectCard :project="project" />
    </li>
  </ul>
</template>

<style scoped>
.grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: 1fr;
}

.grid > li {
  display: flex;
}

.grid > li > * {
  width: 100%;
}

@media (min-width: 720px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
