<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useProjectFilters } from '@/composables/useProjectFilters'
import PageHeader from '@/components/layout/PageHeader.vue'
import ProjectFilterBar from '@/components/project/ProjectFilterBar.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'

const { t } = useI18n()
const { filters, results, isFiltered, update, clear } = useProjectFilters()

useSeo({
  title: () => t('meta.projects'),
  description: () => t('meta.projectsDescription'),
})
</script>

<template>
  <div class="container">
    <PageHeader eyebrow="01 //" :title="t('projects.title')" :intro="t('projects.intro')" />

    <ProjectFilterBar
      :filters="filters"
      :is-filtered="isFiltered"
      :result-count="results.length"
      @update="update"
      @clear="clear"
    />

    <ProjectGrid v-if="results.length" :projects="results" />
    <p v-else class="empty">{{ t('projects.empty') }}</p>
  </div>
</template>

<style scoped>
.empty {
  padding: var(--space-7);
  text-align: center;
  color: var(--muted);
  background-color: var(--surface);
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius);
}
</style>
