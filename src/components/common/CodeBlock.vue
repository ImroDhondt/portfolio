<script setup lang="ts">
defineProps<{ code: string }>()
</script>

<template>
  <div class="code">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code {
  overflow-x: auto;
  padding: var(--space-4);
  background-color: var(--surface-elevated);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
}

pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--text);
}
</style>
