<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'
import { capabilities } from '@/data/capabilities'
import { currentlyLearning } from '@/data/skills'
import { featuredProjects } from '@/data/projects'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'

const { t } = useI18n()
const { text, routeTo } = useLocale()

useSeo({
  title: () => t('site.title'),
  description: () => t('site.description'),
})
</script>

<template>
  <div class="container">
    <!-- Hero ------------------------------------------------------- -->
    <section class="hero">
      <p class="hero__prompt" aria-hidden="true">
        <span class="hero__user">imro@portfolio</span>:<span class="hero__path">~</span>$
        {{ t('home.command') }}
      </p>
      <h1 class="hero__name">{{ profile.name }}</h1>
      <p class="hero__positioning">{{ text(profile.positioning) }}</p>
      <p class="hero__intro">{{ text(profile.shortIntro) }}</p>
      <div class="hero__actions">
        <RouterLink class="button button--primary" :to="routeTo('projects')">
          {{ t('actions.viewProjects') }}
        </RouterLink>
        <RouterLink class="button" :to="routeTo('about')">{{ t('actions.aboutMe') }}</RouterLink>
      </div>
      <p class="hero__availability">
        <span class="hero__dot" aria-hidden="true"></span>
        {{ text(profile.availabilityShort) }}
      </p>
    </section>

    <!-- Status panel ----------------------------------------------- -->
    <section class="status" aria-labelledby="status-title">
      <h2 id="status-title" class="mono-label status__title">{{ t('home.statusTitle') }}</h2>
      <dl class="status__rows">
        <div v-for="row in profile.statusRows" :key="row.key" class="status__row">
          <dt>{{ row.key }}</dt>
          <dd>{{ text(row.value) }}</dd>
        </div>
      </dl>
    </section>

    <!-- Featured projects ------------------------------------------ -->
    <section class="section">
      <SectionHeading index="01" :title="t('home.featuredTitle')" />
      <p class="section__intro">{{ t('home.featuredIntro') }}</p>
      <ProjectGrid :projects="featuredProjects" />
      <RouterLink class="section__more" :to="routeTo('projects')">
        {{ t('actions.allProjects') }} →
      </RouterLink>
    </section>

    <!-- Capabilities ------------------------------------------------ -->
    <section class="section">
      <SectionHeading index="02" :title="t('home.capabilitiesTitle')" />
      <ul class="capabilities">
        <li v-for="capability in capabilities" :key="capability.key" class="capability surface">
          <h3 class="capability__title">{{ text(capability.title) }}</h3>
          <ul class="bullet-list capability__items">
            <li v-for="item in text(capability.items)" :key="item">{{ item }}</li>
          </ul>
        </li>
      </ul>
    </section>

    <!-- Currently learning ------------------------------------------ -->
    <section class="section">
      <SectionHeading index="03" :title="t('home.learningTitle')" />
      <ul class="learning">
        <li v-for="item in currentlyLearning" :key="item.name" class="learning__item surface">
          <p class="learning__name">{{ item.name }}</p>
          <p class="learning__note">{{ text(item.note) }}</p>
        </li>
      </ul>
    </section>

    <!-- About ------------------------------------------------------- -->
    <section class="section">
      <SectionHeading index="04" :title="t('home.aboutTitle')" />
      <div class="prose">
        <p v-for="paragraph in text(profile.longIntro)" :key="paragraph">{{ paragraph }}</p>
      </div>
      <RouterLink class="section__more" :to="routeTo('about')">
        {{ t('home.readMoreAbout') }} →
      </RouterLink>
    </section>

    <!-- Contact ----------------------------------------------------- -->
    <section class="section contact">
      <SectionHeading index="05" :title="t('home.contactTitle')" />
      <p class="contact__prompt">{{ t('home.contactPrompt') }}</p>
      <div class="hero__actions">
        <a class="button button--primary" :href="`mailto:${profile.email}`">{{ t('actions.emailMe') }}</a>
        <a class="button" :href="profile.github" rel="noopener noreferrer" target="_blank">
          {{ t('actions.github') }}
        </a>
        <a class="button" :href="profile.linkedin" rel="noopener noreferrer" target="_blank">
          {{ t('actions.linkedin') }}
        </a>
        <RouterLink class="button" :to="routeTo('projects')">{{ t('actions.viewProjects') }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-8) var(--space-7);
  max-width: var(--measure);
}

.hero__prompt {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--muted);
}

.hero__user {
  color: var(--cyan);
}

.hero__path {
  color: var(--blue);
}

.hero__name {
  font-size: var(--text-3xl);
}

.hero__positioning {
  font-size: var(--text-lg);
  color: var(--text);
}

.hero__intro {
  color: var(--muted);
}

.hero__availability {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  color: var(--muted);
}

.hero__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--success);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.button {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-5);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text);
  transition: border-color var(--transition), color var(--transition), background-color var(--transition);
}

.button:hover {
  border-color: var(--cyan);
  color: var(--cyan-bright);
}

.button--primary {
  background-color: var(--cyan);
  border-color: var(--cyan);
  color: var(--bg);
}

.button--primary:hover {
  background-color: var(--cyan-bright);
  border-color: var(--cyan-bright);
  color: var(--bg);
}

.status {
  padding: var(--space-5);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
}

.status__title {
  margin-bottom: var(--space-4);
  color: var(--cyan);
}

.status__rows {
  display: grid;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.status__row {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: var(--space-3);
}

.status__row dt {
  color: var(--muted);
}

.status__row dd {
  margin: 0;
}

.section {
  padding-block: var(--space-8);
  border-top: var(--border-width) solid var(--border);
  margin-top: var(--space-8);
}

.section__intro {
  margin-bottom: var(--space-5);
  color: var(--muted);
}

.section__more {
  display: inline-block;
  margin-top: var(--space-5);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

.capabilities,
.learning {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 720px) {
  .capabilities {
    grid-template-columns: repeat(2, 1fr);
  }

  .learning {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .learning {
    grid-template-columns: repeat(4, 1fr);
  }
}

.capability {
  padding: var(--space-5);
}

.capability__title {
  margin-bottom: var(--space-4);
  font-size: var(--text-lg);
}

.capability__items {
  font-size: var(--text-sm);
  color: var(--muted);
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

.contact__prompt {
  color: var(--muted);
}
</style>
