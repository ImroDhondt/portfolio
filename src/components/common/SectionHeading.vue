<script setup lang="ts">
defineProps<{
  /** Two-digit section number, e.g. "02". */
  index?: string
  title: string
  level?: 2 | 3
}>()
</script>

<template>
  <div class="heading">
    <p v-if="index" class="mono-label heading__index">
      <span aria-hidden="true">{{ index }} //</span>
    </p>
    <component :is="`h${level ?? 2}`" class="heading__title">{{ title }}</component>
  </div>
</template>

<style scoped>
.heading {
  display: grid;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.heading__index {
  color: var(--cyan);
}

.heading__title {
  font-size: var(--text-2xl);
}
</style>
