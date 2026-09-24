<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { archiveEntry, type ArchiveVariant } from '@/data/archive'
import type { Project } from '@/types/content'
import StatusBadge from '@/components/common/StatusBadge.vue'
import TechTag from '@/components/common/TechTag.vue'
import ProjectMotif from './ProjectMotif.vue'
import ArchiveRail from './ArchiveRail.vue'

const props = defineProps<{ project: Project; index: number; variant: ArchiveVariant }>()

const { t } = useI18n()
const { text, routeTo } = useLocale()

const entry = computed(() => archiveEntry(props.project.slug))
const number = computed(() => String(props.index + 1).padStart(2, '0'))
const tech = computed(() =>
  props.variant === 'compact' ? props.project.primaryTech.slice(0, 3) : props.project.primaryTech,
)
</script>

<template>
  <article
    class="entry reveal"
    :class="[`entry--${variant}`, `entry--${entry.motif}`]"
    :style="{ '--hue': entry.hue }"
  >
    <header class="entry__head">
      <p class="entry__code">
        <span class="entry__number">{{ number }}</span>
        <span class="entry__kind">{{ text(entry.kind) }}</span>
      </p>
      <StatusBadge :status="project.status" />
    </header>

    <div class="entry__visual">
      <ProjectMotif class="entry__motif" :kind="entry.motif" :hue="entry.hue" />
    </div>

    <div class="entry__body">
      <p v-if="project.team" class="entry__team">
        {{ t('ownership.team') }} · {{ project.team.label }}
        <span v-if="entry.roleLabel">{{ text(entry.roleLabel) }}</span>
      </p>

      <h3 class="entry__title">
        <RouterLink class="entry__link" :to="routeTo('project', { slug: project.slug })">
          {{ project.title }}
        </RouterLink>
      </h3>

      <p class="entry__summary">
        {{ variant === 'compact' ? text(project.tagline) : text(project.summary) }}
      </p>

      <ul class="entry__tags" :aria-label="t('projects.stack')">
        <li v-for="item in tech" :key="item"><TechTag :label="item" /></li>
      </ul>

      <p v-if="variant === 'feature'" class="entry__cta" aria-hidden="true">
        {{ t('home.caseStudy') }} <span class="entry__arrow">→</span>
      </p>
    </div>

    <ArchiveRail v-if="variant === 'feature'" class="entry__rail" :project="project" />
  </article>
</template>

<style scoped src="./archive-card.css"></style>
