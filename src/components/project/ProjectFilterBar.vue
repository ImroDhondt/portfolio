<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usedCategories, usedStatuses, usedTechnologies } from '@/data/projects'
import type { ProjectCategory, ProjectStatus } from '@/types/content'
import type { ProjectFilterState } from '@/composables/useProjectFilters'

defineProps<{ filters: ProjectFilterState; isFiltered: boolean; resultCount: number }>()
const emit = defineEmits<{
  (event: 'update', patch: Partial<ProjectFilterState>): void
  (event: 'clear'): void
}>()

const { t } = useI18n()
const categories = usedCategories()
const statuses = usedStatuses()
const technologies = usedTechnologies()

function onStatus(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  emit('update', { status: value as ProjectStatus | 'all' })
}

function onTech(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  emit('update', { tech: value })
}
</script>

<template>
  <div class="filters">
    <div class="filters__group" role="group" :aria-label="t('projects.filterCategory')">
      <button
        type="button"
        class="chip"
        :class="{ 'chip--active': filters.category === 'all' }"
        :aria-pressed="filters.category === 'all'"
        @click="emit('update', { category: 'all' })"
      >
        {{ t('category.all') }}
      </button>
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="chip"
        :class="{ 'chip--active': filters.category === category }"
        :aria-pressed="filters.category === category"
        @click="emit('update', { category: category as ProjectCategory })"
      >
        {{ t(`category.${category}`) }}
      </button>
    </div>

    <div class="filters__selects">
      <label class="field">
        <span class="mono-label">{{ t('projects.filterStatus') }}</span>
        <select :value="filters.status" @change="onStatus">
          <option value="all">{{ t('projects.anyStatus') }}</option>
          <option v-for="status in statuses" :key="status" :value="status">
            {{ t(`status.${status}`) }}
          </option>
        </select>
      </label>

      <label class="field">
        <span class="mono-label">{{ t('projects.filterTech') }}</span>
        <select :value="filters.tech" @change="onTech">
          <option value="all">{{ t('projects.anyTech') }}</option>
          <option v-for="tech in technologies" :key="tech" :value="tech">{{ tech }}</option>
        </select>
      </label>

      <button v-if="isFiltered" type="button" class="clear" @click="emit('clear')">
        {{ t('projects.clearFilters') }}
      </button>
    </div>

    <p class="filters__count" role="status" aria-live="polite">
      {{ t('projects.resultCount', resultCount) }}
    </p>
  </div>
</template>

<style scoped>
.filters {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.filters__group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.chip {
  padding: var(--space-2) var(--space-4);
  background-color: transparent;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-pill);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color var(--transition), border-color var(--transition), background-color var(--transition);
}

.chip:hover {
  color: var(--text);
  border-color: var(--border-strong);
}

.chip--active {
  color: var(--bg);
  background-color: var(--cyan);
  border-color: var(--cyan);
}

.filters__selects {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: var(--space-4);
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

.filters__count {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

/* Phones: categories in one sideways line, the two selects side by side. */
@media (max-width: 719px) {
  .filters {
    gap: var(--space-3);
    margin-bottom: var(--space-5);
  }

  .filters__group {
    flex-wrap: nowrap;
    margin-inline: calc(-1 * var(--space-4));
    padding: 0 var(--space-4) var(--space-1);
    overflow-x: auto;
    scrollbar-width: none;
  }

  .chip {
    flex: none;
  }

  .filters__selects {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3);
  }

  select {
    width: 100%;
    min-width: 0;
  }

  .clear {
    grid-column: 1 / -1;
  }
}
</style>
