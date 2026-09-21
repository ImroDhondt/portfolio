<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { Note } from '@/types/content'

defineProps<{ note: Note }>()

const { t } = useI18n()
const { text, routeTo, formatDate } = useLocale()
</script>

<template>
  <article class="note">
    <div class="note__meta">
      <span class="note__type">{{ t(`notes.type.${note.type}`) }}</span>
      <time class="note__date" :datetime="note.date">{{ formatDate(note.date) }}</time>
    </div>
    <h3 class="note__title">
      <RouterLink class="note__link" :to="routeTo('note', { slug: note.slug })">
        {{ text(note.title) }}
      </RouterLink>
    </h3>
    <p class="note__summary">{{ text(note.summary) }}</p>
    <ul v-if="note.tags.length" class="note__tags">
      <li v-for="tag in note.tags" :key="tag">#{{ tag }}</li>
    </ul>
  </article>
</template>

<style scoped>
.note {
  position: relative;
  display: grid;
  gap: var(--space-3);
  height: 100%;
  padding: var(--space-5);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
  transition: border-color var(--transition);
}

.note:hover,
.note:focus-within {
  border-color: var(--cyan);
}

.note__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.note__type {
  color: var(--cyan);
}

.note__date {
  color: var(--muted);
}

.note__title {
  font-size: var(--text-lg);
}

.note__link {
  color: var(--text);
  text-decoration: none;
}

.note__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.note__link:hover {
  color: var(--cyan-bright);
}

.note__summary {
  font-size: var(--text-sm);
  color: var(--muted);
}

.note__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}
</style>
