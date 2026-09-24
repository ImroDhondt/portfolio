<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { findProject } from '@/data/projects'
import type { Skill } from '@/types/content'

/** One skill as a single line; evidence and caveats open on demand. */
defineProps<{ skill: Skill }>()

const { t } = useI18n()
const { text, routeTo } = useLocale()

function projectTitle(slug: string): string {
  return findProject(slug)?.title ?? slug
}
</script>

<template>
  <details class="skill">
    <summary class="skill__summary">
      <span class="skill__name">{{ skill.name }}<span v-if="skill.caveat" class="skill__note" aria-hidden="true">*</span></span>
      <span class="skill__level" :class="`level--${skill.level}`">
        <span class="skill__dot" aria-hidden="true"></span>
        <span class="skill__level-text">{{ t(`skills.level.${skill.level}`) }}</span>
      </span>
    </summary>

    <div class="skill__detail">
      <p v-if="skill.caveat" class="skill__caveat">{{ text(skill.caveat) }}</p>
      <p class="skill__evidence">
        <span class="skill__label">{{ t('skills.evidenceLabel') }}</span>
        <template v-if="skill.evidence.length">
          <RouterLink
            v-for="slug in skill.evidence"
            :key="slug"
            class="skill__project"
            :to="routeTo('project', { slug })"
          >
            {{ projectTitle(slug) }}
          </RouterLink>
        </template>
        <span v-else class="skill__none">{{ t('skills.noEvidence') }}</span>
      </p>
    </div>
  </details>
</template>

<style scoped>
.skill {
  border-top: var(--border-width) solid var(--border);
}

.skill__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 40px;
  padding: var(--space-2) var(--space-1);
  cursor: pointer;
  list-style: none;
  transition: background-color var(--transition);
}

.skill__summary::-webkit-details-marker {
  display: none;
}

.skill__summary:hover,
.skill[open] > .skill__summary {
  background-color: var(--surface-elevated);
}

.skill__name {
  font-size: var(--text-sm);
  font-weight: 500;
}

.skill__note {
  margin-left: 2px;
  color: var(--warning);
}

.skill__level {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.04em;
  color: var(--level);
}

.level--primary { --level: var(--cyan); }
.level--used-in-projects { --level: var(--success); }
.level--familiar { --level: var(--muted); }
.level--learning { --level: var(--warning); }

.skill__level-text {
  color: var(--muted);
}

.skill__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--level);
}

.level--familiar .skill__dot {
  background-color: transparent;
  border: 1px solid var(--level);
}

.skill__detail {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) var(--space-3);
}

.skill__caveat {
  font-size: var(--text-xs);
  color: var(--text-soft);
}

.skill__evidence {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-1) var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.skill__label {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.skill__none {
  color: var(--muted);
}
</style>
