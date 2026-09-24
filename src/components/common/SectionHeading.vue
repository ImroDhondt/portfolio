<script setup lang="ts">
defineProps<{
  /** Two-digit section number, e.g. "02". */
  index?: string
  title: string
  level?: 2 | 3
  id?: string
}>()
</script>

<template>
  <div class="heading">
    <p v-if="index" class="mono-label heading__index" aria-hidden="true">
      <span class="heading__marker"></span>
      <span>{{ index }} //</span>
      <span class="heading__rule"></span>
    </p>
    <component :is="`h${level ?? 2}`" :id="id" class="heading__title">{{ title }}</component>
  </div>
</template>

<style scoped>
.heading {
  display: grid;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.heading__index {
  max-width: none;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--cyan);
}

.heading__marker {
  width: 6px;
  height: 6px;
  background-color: var(--cyan);
  transform: rotate(45deg);
}

/* The rule runs to the edge of the content column, like an index tab. */
.heading__rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border-strong), var(--border) 60%, transparent);
  transform-origin: left;
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .heading__rule {
      animation: draw linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }
  }
}

@keyframes draw {
  from {
    transform: scaleX(0);
  }
}

.heading__title {
  font-size: var(--text-2xl);
}
</style>
