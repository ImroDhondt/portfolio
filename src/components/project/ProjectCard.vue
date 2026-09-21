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
    <ProjectCover :project="project" />

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
</style>
