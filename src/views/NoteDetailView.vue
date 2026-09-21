<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { findNote } from '@/data/notes'
import { findProject } from '@/data/projects'
import NotFoundView from './NotFoundView.vue'

const props = defineProps<{ slug: string }>()

const { t } = useI18n()
const { text, routeTo, formatDate } = useLocale()

const note = computed(() => findNote(props.slug))

useSeo({
  title: () => (note.value ? `${text(note.value.title)} — Imro Dhondt` : t('meta.notFound')),
  description: () => (note.value ? text(note.value.summary) : t('site.description')),
})

const related = computed(() =>
  (note.value?.relatedProjects ?? [])
    .map((slug) => findProject(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project)),
)
</script>

<template>
  <NotFoundView v-if="!note" />

  <article v-else class="container container--narrow">
    <RouterLink class="back" :to="routeTo('notes')">← {{ t('actions.backToNotes') }}</RouterLink>

    <header class="head">
      <p class="head__meta">
        <span class="head__type">{{ t(`notes.type.${note.type}`) }}</span>
        <time :datetime="note.date">{{ formatDate(note.date) }}</time>
      </p>
      <h1>{{ text(note.title) }}</h1>
      <p class="head__summary">{{ text(note.summary) }}</p>
      <ul v-if="note.tags.length" class="head__tags">
        <li v-for="tag in note.tags" :key="tag">#{{ tag }}</li>
      </ul>
    </header>

    <div class="prose body">
      <p v-for="paragraph in text(note.body)" :key="paragraph">{{ paragraph }}</p>
    </div>

    <section v-if="note.learned" class="extra">
      <h2 class="extra__title">{{ t('notes.learned') }}</h2>
      <p>{{ text(note.learned) }}</p>
    </section>

    <section v-if="note.wouldImprove" class="extra">
      <h2 class="extra__title">{{ t('notes.wouldImprove') }}</h2>
      <p>{{ text(note.wouldImprove) }}</p>
    </section>

    <section v-if="related.length" class="extra">
      <h2 class="extra__title">{{ t('notes.relatedProjects') }}</h2>
      <ul class="related">
        <li v-for="project in related" :key="project.slug">
          <RouterLink :to="routeTo('project', { slug: project.slug })">{{ project.title }}</RouterLink>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-top: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

.head {
  display: grid;
  gap: var(--space-3);
  padding-block: var(--space-5) var(--space-6);
  border-bottom: var(--border-width) solid var(--border);
  margin-bottom: var(--space-6);
}

.head__meta {
  display: flex;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.head__type {
  color: var(--cyan);
}

.head__summary {
  font-size: var(--text-lg);
  color: var(--muted);
}

.head__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.body p {
  color: var(--text);
}

.extra {
  padding-top: var(--space-5);
  margin-top: var(--space-6);
  border-top: var(--border-width) solid var(--border);
  color: var(--muted);
}

.extra__title {
  margin-bottom: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
}

.related {
  display: grid;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
</style>
