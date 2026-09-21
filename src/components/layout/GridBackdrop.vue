<script setup lang="ts">
/**
 * Static grid backdrop. Purely decorative, so it is hidden from assistive
 * technology and never animates.
 */
</script>

<template>
  <div class="backdrop" aria-hidden="true"></div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(38, 55, 71, 0.22) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(38, 55, 71, 0.22) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 100%);
}
</style>
