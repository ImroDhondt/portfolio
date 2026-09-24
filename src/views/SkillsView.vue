<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { skills, currentlyLearning } from '@/data/skills'
import { SKILL_GROUPS, SKILL_LEVELS, type SkillLevel } from '@/types/content'
import PageHeader from '@/components/layout/PageHeader.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import LevelFilter from '@/components/skills/LevelFilter.vue'
import SkillGroup from '@/components/skills/SkillGroup.vue'

const { t } = useI18n()
const { text } = useLocale()

useSeo({
  title: () => t('meta.skills'),
  description: () => t('meta.skillsDescription'),
})

const level = ref<SkillLevel | null>(null)

/** Strongest skills first inside each group; empty groups disappear. */
const groups = computed(() =>
  SKILL_GROUPS.map((group) => ({
    group,
    items: skills
      .filter((skill) => skill.group === group && (!level.value || skill.level === level.value))
      .sort((a, b) => SKILL_LEVELS.indexOf(a.level) - SKILL_LEVELS.indexOf(b.level)),
  })).filter((entry) => entry.items.length > 0),
)
</script>

<template>
  <div class="container">
    <PageHeader eyebrow="03 //" :title="t('skills.title')" />

    <LevelFilter v-model="level" class="filter" />

    <div class="groups">
      <SkillGroup
        v-for="entry in groups"
        :key="entry.group"
        :group="entry.group"
        :items="entry.items"
        :filtered="level !== null"
      />
    </div>

    <section class="learning-block">
      <SectionHeading :title="t('home.learningTitle')" />
      <ul class="learning">
        <li v-for="item in currentlyLearning" :key="item.name" class="learning__item">
          <p class="learning__name">{{ item.name }}</p>
          <p class="learning__note">{{ text(item.note) }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.filter {
  margin-bottom: var(--space-6);
}

/* Groups flow into columns like a spec sheet, so the whole list fits on a few screens. */
.groups {
  columns: 1;
  column-gap: var(--space-5);
}

@media (min-width: 720px) {
  .groups {
    columns: 2;
  }
}

@media (min-width: 1080px) {
  .groups {
    columns: 3;
  }
}


.learning-block {
  margin-top: var(--space-8);
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
  border-left: 2px solid var(--warning);
  background-color: var(--surface);
}

.learning__name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text);
}

.learning__note {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--muted);
}
</style>
