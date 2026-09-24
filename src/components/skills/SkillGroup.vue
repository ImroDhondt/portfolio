<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMediaQuery } from '@/composables/useMediaQuery'
import type { Skill, SkillGroup } from '@/types/content'
import SkillRow from './SkillRow.vue'

/**
 * One skill group. On wide screens it is always open; on phones it folds
 * into a single header line so all groups fit on one screen. An active
 * level filter opens every group, because the visitor asked to see results.
 */
const props = defineProps<{ group: SkillGroup; items: Skill[]; filtered: boolean }>()

const { t } = useI18n()
const wide = useMediaQuery('(min-width: 720px)')
const expanded = ref(false)

const open = computed(() => wide.value || props.filtered || expanded.value)
const collapsible = computed(() => !wide.value && !props.filtered)
const listId = computed(() => `skills-${props.group}`)
</script>

<template>
  <section class="group" :class="{ 'group--open': open }">
    <h2 class="group__heading">
      <button
        v-if="collapsible"
        type="button"
        class="group__title group__title--toggle"
        :aria-expanded="open"
        :aria-controls="listId"
        @click="expanded = !expanded"
      >
        <span>{{ t(`skills.group.${group}`) }}</span>
        <span class="group__count">{{ items.length }}</span>
        <span class="group__chevron" aria-hidden="true"></span>
      </button>
      <span v-else class="group__title">
        <span>{{ t(`skills.group.${group}`) }}</span>
        <span class="group__count">{{ items.length }}</span>
      </span>
    </h2>
    <ul v-show="open" :id="listId" class="group__list">
      <li v-for="skill in items" :key="skill.name">
        <SkillRow :skill="skill" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.group {
  break-inside: avoid;
  margin-bottom: var(--space-5);
  padding: var(--space-4) var(--space-4) var(--space-2);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
}

.group__heading {
  font: inherit;
}

.group__title {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  width: 100%;
  margin-bottom: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--cyan);
}

.group__title > :first-child {
  flex: 1;
  text-align: left;
}

.group__count {
  color: var(--muted);
}

.group__title--toggle {
  align-items: center;
  min-height: 44px;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
}

.group__chevron {
  width: 8px;
  height: 8px;
  border-right: 1.5px solid var(--text-soft);
  border-bottom: 1.5px solid var(--text-soft);
  transform: translateY(-2px) rotate(45deg);
  transition: transform var(--transition);
}

.group--open .group__chevron {
  transform: translateY(2px) rotate(-135deg);
}

@media (max-width: 719px) {
  .group {
    margin-bottom: var(--space-2);
    padding-block: var(--space-1);
  }

  .group--open {
    padding-bottom: var(--space-2);
  }

  .group--open .group__title--toggle {
    margin-bottom: var(--space-1);
  }
}
</style>
