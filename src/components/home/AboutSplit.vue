<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { profile } from '@/data/profile'

/** About on the home page: a pull quote, the rest of the story and a path. */
const { t } = useI18n()
const { text, routeTo } = useLocale()

const paragraphs = computed(() => text(profile.longIntro))

const timeline = computed(() => [
  { mark: '—', label: t('home.timeline.interest') },
  { mark: '—', label: t('home.timeline.secondary') },
  { mark: String(profile.studyStart), label: t('home.timeline.howest') },
  { mark: t('home.timeline.nowMark'), label: text(profile.role), current: true },
  { mark: '2027', label: text(profile.availabilityShort) },
])
</script>

<template>
  <div class="about">
    <blockquote class="about__quote reveal">
      <p>{{ paragraphs[0] }}</p>
    </blockquote>

    <div class="about__detail">
      <div class="prose about__prose">
        <p v-for="paragraph in paragraphs.slice(1)" :key="paragraph">{{ paragraph }}</p>
      </div>

      <ol class="path" :aria-label="t('home.timeline.label')">
        <li v-for="step in timeline" :key="step.label" class="path__step" :class="{ 'path__step--current': step.current }">
          <span class="path__mark">{{ step.mark }}</span>
          <span class="path__label">{{ step.label }}</span>
        </li>
      </ol>

      <RouterLink class="about__more" :to="routeTo('about')">{{ t('home.readMoreAbout') }} →</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-7);
}

@media (min-width: 900px) {
  .about {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: var(--space-8);
  }
}

.about__quote {
  position: relative;
  padding-left: var(--space-5);
  border-left: 2px solid var(--cyan);
}

.about__quote p {
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 1.05rem + 0.9vw, 1.7rem);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.015em;
  color: var(--text);
}

.about__detail {
  display: grid;
  gap: var(--space-6);
  align-content: start;
}

.about__prose {
  color: var(--text-soft);
}

.path {
  display: grid;
  border-left: var(--border-width) solid var(--border-strong);
}

.path__step {
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: var(--space-3);
  padding: var(--space-2) 0 var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  color: var(--text-soft);
}

.path__step::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 0.95em;
  width: 7px;
  height: 7px;
  background-color: var(--bg);
  border: var(--border-width) solid var(--border-strong);
  transform: rotate(45deg);
}

.path__step--current::before {
  background-color: var(--cyan);
  border-color: var(--cyan);
}

.path__mark {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.9;
  color: var(--muted);
}

.path__step--current .path__mark {
  color: var(--cyan);
}

.about__more {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
