<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { findProject } from '@/data/projects'
import StatusBadge from '@/components/common/StatusBadge.vue'
import OwnershipBadge from '@/components/common/OwnershipBadge.vue'
import TechTag from '@/components/common/TechTag.vue'
import CodeBlock from '@/components/common/CodeBlock.vue'
import EvidencePanel from '@/components/project/EvidencePanel.vue'
import NotFoundView from './NotFoundView.vue'

const props = defineProps<{ slug: string }>()

const { t } = useI18n()
const { text, routeTo } = useLocale()

const project = computed(() => findProject(props.slug))

useSeo({
  title: () => (project.value ? `${project.value.title} — Imro Dhondt` : t('meta.notFound')),
  description: () => (project.value ? text(project.value.summary) : t('site.description')),
})

/** Sections are numbered in the order they are written in the data file. */
function sectionIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}

const links = computed(() => {
  if (!project.value) return []
  const { repository, live, download, site } = project.value.links
  return [
    repository ? { href: repository, label: t('actions.repository') } : null,
    live ? { href: live, label: t('actions.liveSite') } : null,
    site ? { href: site, label: t('actions.liveSite') } : null,
    download ? { href: download, label: t('actions.download') } : null,
  ].filter((link): link is { href: string; label: string } => link !== null)
})
</script>

<template>
  <NotFoundView v-if="!project" />

  <div v-else class="container">
    <RouterLink class="back" :to="routeTo('projects')">← {{ t('actions.backToProjects') }}</RouterLink>

    <header class="head">
      <div class="head__badges">
        <StatusBadge :status="project.status" />
        <OwnershipBadge :ownership="project.ownership" :team-label="project.team?.label" />
      </div>
      <h1>{{ project.title }}</h1>
      <p class="head__tagline">{{ text(project.tagline) }}</p>
      <p class="head__description">{{ text(project.description) }}</p>

      <dl class="head__meta">
        <div>
          <dt class="mono-label">{{ t('projects.role') }}</dt>
          <dd>{{ text(project.role) }}</dd>
        </div>
        <div>
          <dt class="mono-label">{{ t('category.label') }}</dt>
          <dd>{{ project.categories.map((c) => t(`category.${c}`)).join(' · ') }}</dd>
        </div>
      </dl>

      <div v-if="links.length" class="head__links">
        <a
          v-for="link in links"
          :key="link.href"
          class="head__link"
          :href="link.href"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ link.label }} ↗
        </a>
      </div>
      <p v-else class="head__nolinks">
        {{ project.confidential ? t('projects.confidential') : t('projects.noPublicLinks') }}
      </p>
    </header>

    <!-- Team projects say up front which parts are not Imro's work. -->
    <section v-if="project.team" class="team">
      <h2 class="team__title">{{ t('ownership.team') }} · {{ project.team.label }}</h2>
      <p class="team__role">
        <span class="mono-label">{{ t('ownership.myRole') }}</span><br />
        {{ text(project.team.myRole) }}
      </p>
      <div class="team__not">
        <p class="mono-label">{{ t('ownership.notMine') }}</p>
        <ul class="bullet-list">
          <li v-for="item in text(project.team.notMine)" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <div class="sections">
      <section v-for="(section, index) in project.sections" :key="section.id" class="section">
        <p class="mono-label section__index" aria-hidden="true">{{ sectionIndex(index) }} //</p>
        <h2 class="section__title">{{ t(`section.${section.id}`) }}</h2>
        <p v-if="section.body" class="section__body">{{ text(section.body) }}</p>
        <ul v-if="section.bullets" class="bullet-list section__bullets">
          <li v-for="item in text(section.bullets)" :key="item">{{ item }}</li>
        </ul>
        <CodeBlock v-if="section.code" :code="section.code" class="section__code" />
      </section>

      <section class="section">
        <p class="mono-label section__index" aria-hidden="true">
          {{ sectionIndex(project.sections.length) }} //
        </p>
        <h2 class="section__title">{{ t('projects.technologies') }}</h2>
        <ul class="techs">
          <li v-for="tech in project.technologies" :key="tech">
            <TechTag :label="tech" />
          </li>
        </ul>
      </section>
    </div>

    <EvidencePanel :evidence="project.evidence" />
  </div>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-top: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

.head {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-5) var(--space-6);
}

.head__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.head__tagline {
  font-size: var(--text-lg);
  color: var(--text);
}

.head__description {
  color: var(--muted);
}

.head__meta {
  display: grid;
  gap: var(--space-4);
  padding-top: var(--space-2);
}

@media (min-width: 720px) {
  .head__meta {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.head__meta dd {
  margin: var(--space-1) 0 0;
  font-size: var(--text-sm);
}

.head__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.head__link {
  padding: var(--space-2) var(--space-4);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-decoration: none;
}

.head__nolinks {
  font-size: var(--text-sm);
  color: var(--muted);
}

.team {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-6);
  padding: var(--space-5);
  background-color: var(--surface);
  border: var(--border-width) solid color-mix(in srgb, var(--blue) 35%, var(--border));
  border-radius: var(--radius);
}

.team__title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue);
}

.team__role,
.team__not {
  font-size: var(--text-sm);
  color: var(--muted);
}

.team__not .bullet-list {
  margin-top: var(--space-3);
}

.sections {
  display: grid;
  gap: var(--space-7);
  margin-top: var(--space-8);
}

.section {
  display: grid;
  gap: var(--space-3);
  padding-top: var(--space-5);
  border-top: var(--border-width) solid var(--border);
}

.section__index {
  color: var(--cyan);
}

.section__title {
  font-size: var(--text-xl);
}

.section__body {
  color: var(--muted);
}

.section__bullets {
  font-size: var(--text-sm);
  color: var(--muted);
}

.section__code {
  margin-top: var(--space-2);
}

.techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
