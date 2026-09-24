<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { Project } from '@/types/content'
import StatusBadge from '@/components/common/StatusBadge.vue'
import OwnershipBadge from '@/components/common/OwnershipBadge.vue'
import TechTag from '@/components/common/TechTag.vue'
import ProjectCover from './ProjectCover.vue'

defineProps<{ project: Project }>()

const { t } = useI18n()
const { text, routeTo } = useLocale()
</script>

<template>
  <article class="card">
    <ProjectCover class="card__cover" :project="project" />

    <div class="card__body">
      <div class="card__badges">
        <StatusBadge :status="project.status" />
        <OwnershipBadge
          :ownership="project.ownership"
          :team-label="project.team?.label"
          short
        />
      </div>

      <h3 class="card__title">
        <RouterLink class="card__link" :to="routeTo('project', { slug: project.slug })">
          {{ project.title }}
        </RouterLink>
      </h3>

      <p class="card__summary">{{ text(project.summary) }}</p>

      <dl class="card__meta">
        <dt class="mono-label">{{ t('projects.role') }}</dt>
        <dd>{{ text(project.role) }}</dd>
      </dl>

      <ul class="card__tags">
        <li v-for="tech in project.primaryTech" :key="tech">
          <TechTag :label="tech" />
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition);
}

.card:hover,
.card:focus-within {
  border-color: var(--cyan);
  transform: translateY(-2px);
}

.card__body {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5);
}

.card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.card__title {
  font-size: var(--text-xl);
}

/* The whole card is clickable, but only the title is a real link. */
.card__link {
  color: var(--text);
  text-decoration: none;
}

.card__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.card {
  position: relative;
}

.card__link:hover {
  color: var(--cyan-bright);
}

.card__summary {
  color: var(--muted);
  font-size: var(--text-sm);
}

.card__meta {
  display: grid;
  gap: var(--space-1);
  font-size: var(--text-sm);
}

.card__meta dd {
  margin: 0;
  color: var(--muted);
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
}

/*
 * Phones: a compact row with the motif as a side strip. Role and stack stay
 * on the project page, so the list reads as an index rather than a scroll.
 */
@media (max-width: 719px) {
  .card {
    flex-direction: row;
  }

  .card > .card__cover {
    flex: none;
    width: 88px;
    aspect-ratio: auto;
    padding: 0;
    border-bottom: 0;
    border-right: var(--border-width) solid var(--border);
  }

  .card > .card__cover :deep(.cover__motif) {
    inset: var(--space-3) var(--space-2);
  }

  .card__body {
    gap: var(--space-2);
    padding: var(--space-4);
  }

  .card__title {
    font-size: var(--text-lg);
  }

  .card__summary {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
  }

  .card__meta,
  .card__tags {
    display: none;
  }

  .card:hover,
  .card:focus-within {
    transform: none;
  }
}
</style>
