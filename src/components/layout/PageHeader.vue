<script setup lang="ts">
defineProps<{
  /** Mono label shown above the heading, e.g. a section number. */
  eyebrow?: string
  title: string
  intro?: string
}>()
</script>

<template>
  <div class="page-header">
    <p v-if="eyebrow" class="mono-label">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p v-if="intro" class="page-header__intro">{{ intro }}</p>
  </div>
</template>

<style scoped>
.page-header {
  display: grid;
  gap: var(--space-3);
  padding-block: var(--space-7) var(--space-6);
  border-bottom: var(--border-width) solid var(--border);
  margin-bottom: var(--space-7);
}

.page-header__intro {
  color: var(--muted);
  font-size: var(--text-lg);
}
</style>
