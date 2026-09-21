<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="tag">{{ label }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 2px var(--space-2);
  background-color: var(--surface-elevated);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
  white-space: nowrap;
}
</style>
