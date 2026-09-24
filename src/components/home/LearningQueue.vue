<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { currentlyLearning } from '@/data/skills'

/** The current learning topics, drawn as a vertical work queue. */
const { t } = useI18n()
const { text } = useLocale()
</script>

<template>
  <div class="queue">
    <p class="queue__caption" aria-hidden="true">
      {{ t('home.learningQueue', { count: currentlyLearning.length }) }}
    </p>
    <ol class="queue__list">
      <li v-for="(item, index) in currentlyLearning" :key="item.name" class="queue__item reveal">
        <span class="queue__index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        <div>
          <p class="queue__name">{{ item.name }}</p>
          <p class="queue__note">{{ text(item.note) }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.queue {
  display: grid;
  gap: var(--space-4);
}

.queue__caption {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--muted);
}

.queue__list {
  position: relative;
  display: grid;
  gap: var(--space-5);
}

/* The spine of the queue. */
.queue__list::before {
  content: '';
  position: absolute;
  top: 0.9rem;
  bottom: 0.9rem;
  left: 1.1rem;
  width: 1px;
  background: linear-gradient(var(--cyan), var(--border) 40%, transparent);
}

.queue__item {
  position: relative;
  display: grid;
  grid-template-columns: 2.2rem 1fr;
  gap: var(--space-4);
}

.queue__index {
  position: relative;
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 1.8rem;
  background-color: var(--bg);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-soft);
}

.queue__item:first-child .queue__index {
  border-color: var(--cyan);
  color: var(--cyan);
}

.queue__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
}

.queue__note {
  font-size: var(--text-sm);
  color: var(--text-soft);
}

@media (max-width: 519px) {
  .queue__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-5) var(--space-4);
  }

  .queue__list::before {
    display: none;
  }

  .queue__item {
    grid-template-columns: 1fr;
    align-content: start;
    gap: var(--space-2);
  }

  .queue__name {
    font-size: var(--text-base);
  }
}
</style>
