<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { featuredProjects } from '@/data/projects'
import SectionHeading from '@/components/common/SectionHeading.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import ProjectArchive from '@/components/project/ProjectArchive.vue'
import CapabilityMatrix from '@/components/home/CapabilityMatrix.vue'
import LearningQueue from '@/components/home/LearningQueue.vue'
import AboutSplit from '@/components/home/AboutSplit.vue'
import ContactEndpoint from '@/components/home/ContactEndpoint.vue'

const { t } = useI18n()
const { routeTo } = useLocale()

useSeo({
  title: () => t('site.title'),
  description: () => t('site.description'),
})
</script>

<template>
  <div class="container">
    <HomeHero />

    <section class="section" aria-labelledby="featured-title">
      <SectionHeading id="featured-title" index="01" :title="t('home.featuredTitle')" />
      <div class="section__lede">
        <p class="section__intro">{{ t('home.featuredIntro') }}</p>
        <RouterLink class="section__more" :to="routeTo('projects')">
          {{ t('actions.allProjects') }} →
        </RouterLink>
      </div>
      <ProjectArchive :projects="featuredProjects" />
    </section>

    <section class="section" aria-labelledby="capabilities-title">
      <SectionHeading id="capabilities-title" index="02" :title="t('home.capabilitiesTitle')" />
      <CapabilityMatrix />
    </section>

    <section class="section section--split" aria-labelledby="learning-title">
      <SectionHeading id="learning-title" index="03" :title="t('home.learningTitle')" />
      <LearningQueue />
    </section>

    <section class="section" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="04" :title="t('home.aboutTitle')" />
      <AboutSplit />
    </section>

    <section class="section" aria-labelledby="contact-title">
      <SectionHeading id="contact-title" index="05" :title="t('home.contactTitle')" />
      <ContactEndpoint />
    </section>
  </div>
</template>

<style scoped>
.section {
  padding-block: var(--space-8);
}

@media (min-width: 900px) {
  .section {
    padding-block: var(--space-9) var(--space-8);
  }
}

.section__lede {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-4) var(--space-6);
  margin-top: calc(-1 * var(--space-3));
  margin-bottom: var(--space-6);
}

.section__intro {
  max-width: 60ch;
  color: var(--text-soft);
}

.section__more {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

/* Heading column on the left, content on the right. */
@media (min-width: 900px) {
  .section--split {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: var(--space-8);
    align-items: start;
  }

  .section--split > :first-child {
    position: sticky;
    top: calc(64px + var(--space-6));
  }
}
</style>
