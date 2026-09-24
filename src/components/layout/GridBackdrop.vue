<script setup lang="ts">
/**
 * Static drafting-table backdrop: a faint grid, a soft light pool behind the
 * hero and one margin guide line. Purely decorative, hidden from assistive
 * technology, and never animated.
 */
</script>

<template>
  <div class="backdrop" aria-hidden="true">
    <div class="backdrop__grid"></div>
    <div class="backdrop__guide backdrop__guide--v"></div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 55% 40% at 72% 8%, rgba(81, 227, 209, 0.07), transparent 70%),
    radial-gradient(ellipse 40% 30% at 10% 0%, rgba(122, 162, 247, 0.05), transparent 70%),
    var(--bg);
}

.backdrop__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(81, 227, 209, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(81, 227, 209, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 70% at 60% 0%, #000 30%, transparent 100%);
}

/* Thin construction lines, like the margins of an engineering drawing. */
.backdrop__guide {
  position: absolute;
  background-color: rgba(56, 80, 100, 0.28);
}

.backdrop__guide--v {
  top: 0;
  bottom: 0;
  left: max(var(--space-4), calc((100vw - var(--container)) / 2 - var(--space-5)));
  width: 1px;
  mask-image: linear-gradient(#000, transparent 70%);
}

@media (max-width: 719px) {
  .backdrop__grid {
    background-size: 40px 40px;
    opacity: 0.6;
  }

  .backdrop__guide {
    display: none;
  }
}
</style>
