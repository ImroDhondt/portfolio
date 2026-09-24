<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'
import { SKILL_LEVELS, type SkillLevel } from '@/types/content'

/**
 * Level filter that doubles as the legend: each chip names a level, counts
 * its skills, and the selected level's meaning is spelled out below.
 */
const selected = defineModel<SkillLevel | null>({ required: true })
const { t } = useI18n()

const counts = computed(() =>
  Object.fromEntries(
    SKILL_LEVELS.map((level) => [level, skills.filter((skill) => skill.level === level).length]),
  ),
)

function toggle(level: SkillLevel) {
  selected.value = selected.value === level ? null : level
}
</script>

<template>
  <div class="filter">
    <div class="filter__chips" role="group" :aria-label="t('skills.filterLabel')">
      <button type="button" class="chip" :aria-pressed="selected === null" @click="selected = null">
        {{ t('category.all') }} <span class="chip__count">{{ skills.length }}</span>
      </button>
      <button
        v-for="level in SKILL_LEVELS"
        :key="level"
        type="button"
        class="chip"
        :class="`level--${level}`"
        :aria-pressed="selected === level"
        @click="toggle(level)"
      >
        <span class="chip__dot" aria-hidden="true"></span>
        {{ t(`skills.level.${level}`) }}
        <span class="chip__count">{{ counts[level] }}</span>
      </button>
    </div>
    <p class="filter__help" aria-live="polite">
      {{ selected ? t(`skills.levelHelp.${selected}`) : t('skills.openHint') }}
    </p>
  </div>
</template>

<style scoped>
.filter {
  display: grid;
  gap: var(--space-3);
}

.filter__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.level--primary { --level: var(--cyan); }
.level--used-in-projects { --level: var(--success); }
.level--familiar { --level: var(--muted); }
.level--learning { --level: var(--warning); }

.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 36px;
  padding: var(--space-1) var(--space-4);
  background: none;
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  color: var(--text-soft);
  cursor: pointer;
  transition: border-color var(--transition), background-color var(--transition), color var(--transition);
}

.chip:hover {
  border-color: var(--level, var(--cyan));
  color: var(--text);
}

.chip[aria-pressed='true'] {
  background-color: color-mix(in srgb, var(--level, var(--cyan)) 14%, transparent);
  border-color: var(--level, var(--cyan));
  color: var(--text);
}

.chip__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--level);
}

.level--familiar .chip__dot {
  background-color: transparent;
  border: 1px solid var(--level);
}

.chip__count {
  color: var(--muted);
}

.filter__help {
  font-size: var(--text-sm);
  color: var(--muted);
}
</style>
