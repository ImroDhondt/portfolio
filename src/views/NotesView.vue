<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useNoteFilters } from '@/composables/useNoteFilters'
import { usedNoteTypes, usedTags } from '@/data/notes'
import type { NoteType } from '@/types/content'
import PageHeader from '@/components/layout/PageHeader.vue'
import NoteCard from '@/components/notes/NoteCard.vue'

const { t } = useI18n()
const { filters, results, isFiltered, update, clear } = useNoteFilters()

useSeo({
  title: () => t('meta.notes'),
  description: () => t('meta.notesDescription'),
})

const types = usedNoteTypes()
const tags = usedTags()

function onType(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  update({ type: value as NoteType | 'all' })
}

function onTag(event: Event) {
  update({ tag: (event.target as HTMLSelectElement).value })
}
</script>

<template>
  <div class="container">
    <PageHeader eyebrow="04 //" :title="t('notes.title')" :intro="t('notes.intro')" />

    <div class="filters">
      <label class="field">
        <span class="mono-label">{{ t('notes.filterType') }}</span>
        <select :value="filters.type" @change="onType">
          <option value="all">{{ t('notes.anyType') }}</option>
          <option v-for="type in types" :key="type" :value="type">{{ t(`notes.type.${type}`) }}</option>
        </select>
      </label>

      <label class="field">
        <span class="mono-label">{{ t('notes.filterTag') }}</span>
        <select :value="filters.tag" @change="onTag">
          <option value="all">{{ t('notes.anyTag') }}</option>
          <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
        </select>
      </label>

      <button v-if="isFiltered" type="button" class="clear" @click="clear">
        {{ t('projects.clearFilters') }}
      </button>

      <p class="count" role="status" aria-live="polite">{{ t('notes.resultCount', results.length) }}</p>
    </div>

    <ul v-if="results.length" class="notes">
      <li v-for="note in results" :key="note.slug">
        <NoteCard :note="note" />
      </li>
    </ul>
    <p v-else class="empty">{{ t('notes.empty') }}</p>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.field {
  display: grid;
  gap: var(--space-2);
}

select {
  min-width: 12rem;
  padding: var(--space-2) var(--space-3);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
}

.clear {
  padding: var(--space-2) var(--space-4);
  background: transparent;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: var(--text-sm);
  color: var(--cyan);
}

.count {
  flex-basis: 100%;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.notes {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 720px) {
  .notes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .notes {
    grid-template-columns: repeat(3, 1fr);
  }
}

.empty {
  padding: var(--space-7);
  text-align: center;
  color: var(--muted);
  background-color: var(--surface);
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius);
}
</style>
