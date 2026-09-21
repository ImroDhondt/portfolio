<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'
import { achievements, realisations, teamContribution } from '@/data/capabilities'
import PageHeader from '@/components/layout/PageHeader.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'

const { t } = useI18n()
const { text, routeTo } = useLocale()

useSeo({
  title: () => t('meta.about'),
  description: () => t('meta.aboutDescription'),
})

const journey = {
  en: 'I have been interested in computers and applications from a young age. I was always curious about how the software I used was created, which led me to study Informatics Management in secondary school and later pursue Software Engineering at Howest. I enjoy turning ideas into meaningful applications and understanding both the technical and practical side of building software.',
  nl: 'Ik ben al van jongs af geïnteresseerd in computers en applicaties. Ik was altijd nieuwsgierig naar hoe de software die ik gebruikte gemaakt werd. Dat bracht me naar Informaticabeheer in het secundair en later naar Software Engineering aan Howest. Ik zet graag ideeën om in betekenisvolle applicaties en wil zowel de technische als de praktische kant van software bouwen begrijpen.',
}
</script>

<template>
  <div class="container container--narrow">
    <PageHeader eyebrow="02 //" :title="t('about.title')" />

    <div class="prose">
      <p v-for="paragraph in text(profile.longIntro)" :key="paragraph">{{ paragraph }}</p>
      <p>{{ text(profile.availability) }}</p>
    </div>

    <section class="block">
      <SectionHeading index="01" :title="t('about.journeyTitle')" />
      <p class="muted">{{ text(journey) }}</p>
    </section>

    <section class="block">
      <SectionHeading index="02" :title="t('about.realisationsTitle')" />
      <ul class="bullet-list muted">
        <li v-for="item in text(realisations)" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="block">
      <SectionHeading index="03" :title="t('about.teamTitle')" />
      <p class="muted">{{ text(teamContribution.statement) }}</p>
      <ul class="bullet-list muted block__list">
        <li v-for="item in text(teamContribution.items)" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="block">
      <SectionHeading index="04" :title="t('about.achievementsTitle')" />
      <ul class="achievements">
        <li v-for="item in achievements" :key="item.project" class="achievement surface">
          <h3 class="achievement__title">{{ text(item.title) }}</h3>
          <p class="achievement__body">{{ text(item.body) }}</p>
          <RouterLink class="achievement__link" :to="routeTo('project', { slug: item.project })">
            {{ t('about.seeProject') }} →
          </RouterLink>
        </li>
      </ul>
    </section>

    <section class="block">
      <SectionHeading index="05" :title="t('about.educationTitle')" />
      <dl class="facts">
        <div>
          <dt>{{ t('about.school') }}</dt>
          <dd>{{ profile.school }}</dd>
        </div>
        <div>
          <dt>{{ t('about.programme') }}</dt>
          <dd>{{ text(profile.programme) }}</dd>
        </div>
        <div>
          <dt>{{ t('about.started') }}</dt>
          <dd>{{ profile.studyStart }}</dd>
        </div>
        <div>
          <dt>{{ t('about.graduation') }}</dt>
          <dd>{{ text(profile.expectedGraduation) }}</dd>
        </div>
        <div>
          <dt>{{ t('about.location') }}</dt>
          <dd>{{ text(profile.location) }}</dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<style scoped>
.block {
  padding-top: var(--space-7);
  margin-top: var(--space-7);
  border-top: var(--border-width) solid var(--border);
}

.block__list {
  margin-top: var(--space-4);
}

.muted {
  color: var(--muted);
}

.achievements {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 720px) {
  .achievements {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.achievement {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5);
}

.achievement__title {
  font-size: var(--text-lg);
}

.achievement__body {
  font-size: var(--text-sm);
  color: var(--muted);
}

.achievement__link {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

.facts {
  display: grid;
  gap: var(--space-3);
  font-size: var(--text-sm);
}

.facts > div {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: var(--border-width) solid var(--border);
}

.facts dt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.facts dd {
  margin: 0;
}

@media (max-width: 599px) {
  .facts > div {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
}
</style>
