<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { skills, currentlyLearning } from '@/data/skills'
import { findProject } from '@/data/projects'
import { SKILL_GROUPS, SKILL_LEVELS } from '@/types/content'
import PageHeader from '@/components/layout/PageHeader.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'

const { t } = useI18n()
const { text, routeTo } = useLocale()

useSeo({
  title: () => t('meta.skills'),
  description: () => t('meta.skillsDescription'),
})

const groups = computed(() =>
  SKILL_GROUPS.map((group) => ({
    group,
    items: skills.filter((skill) => skill.group === group),
  })).filter((entry) => entry.items.length > 0),
)

function projectTitle(slug: string): string {
  return findProject(slug)?.title ?? slug
}
</script>

<template>
  <div class="container">
    <PageHeader eyebrow="03 //" :title="t('skills.title')" :intro="t('skills.intro')" />

    <section class="legend surface">
      <h2 class="mono-label legend__title">{{ t('skills.legendTitle') }}</h2>
      <dl class="legend__list">
        <div v-for="level in SKILL_LEVELS" :key="level">
          <dt class="legend__level" :class="`legend__level--${level}`">{{ t(`skills.level.${level}`) }}</dt>
          <dd>{{ t(`skills.levelHelp.${level}`) }}</dd>
        </div>
      </dl>
    </section>

    <section v-for="entry in groups" :key="entry.group" class="group">
      <SectionHeading :title="t(`skills.group.${entry.group}`)" />
      <ul class="skills">
        <li v-for="skill in entry.items" :key="skill.name" class="skill">
          <div class="skill__head">
            <span class="skill__name">{{ skill.name }}</span>
            <span class="skill__level" :class="`skill__level--${skill.level}`">
              {{ t(`skills.level.${skill.level}`) }}
            </span>
          </div>

          <p v-if="skill.caveat" class="skill__caveat">{{ text(skill.caveat) }}</p>

          <p class="skill__evidence">
            <span class="mono-label">{{ t('skills.evidenceLabel') }}:</span>
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
        </li>
      </ul>
    </section>

    <section class="group">
      <SectionHeading :title="t('home.learningTitle')" />
      <ul class="learning">
        <li v-for="item in currentlyLearning" :key="item.name" class="learning__item surface">
          <p class="learning__name">{{ item.name }}</p>
          <p class="learning__note">{{ text(item.note) }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.legend {
  padding: var(--space-5);
  margin-bottom: var(--space-8);
}

.legend__title {
  margin-bottom: var(--space-4);
  color: var(--cyan);
}

.legend__list {
  display: grid;
  gap: var(--space-3);
  font-size: var(--text-sm);
}

@media (min-width: 840px) {
  .legend__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.legend__level {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.legend__list dd {
  margin: var(--space-1) 0 0;
  color: var(--muted);
}

.legend__level--primary,
.skill__level--primary {
  color: var(--cyan);
}

.legend__level--used-in-projects,
.skill__level--used-in-projects {
  color: var(--success);
}

.legend__level--familiar,
.skill__level--familiar {
  color: var(--muted);
}

.legend__level--learning,
.skill__level--learning {
  color: var(--warning);
}

.group {
  padding-top: var(--space-6);
  margin-top: var(--space-6);
  border-top: var(--border-width) solid var(--border);
}

.skills {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 840px) {
  .skills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.skill {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
}

.skill__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
}

.skill__name {
  font-weight: 500;
}

.skill__level {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.skill__caveat {
  font-size: var(--text-sm);
  color: var(--muted);
}

.skill__evidence {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: baseline;
  font-size: var(--text-sm);
}

.skill__project {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
}

.skill__none {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  color: var(--muted);
}

.learning {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 720px) {
  .learning {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .learning {
    grid-template-columns: repeat(4, 1fr);
  }
}

.learning__item {
  padding: var(--space-4);
}

.learning__name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--cyan);
}

.learning__note {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--muted);
}
</style>
