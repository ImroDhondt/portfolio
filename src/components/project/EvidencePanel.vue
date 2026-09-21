<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { ProjectEvidence } from '@/types/content'

const props = defineProps<{ evidence: ProjectEvidence }>()

const { t } = useI18n()
const { text } = useLocale()

type Tone = 'verified' | 'mine' | 'team' | 'warn' | 'plan'

const blocks = computed(() => {
  const all: { key: string; tone: Tone; items: string[] }[] = [
    { key: 'verified', tone: 'verified', items: text(props.evidence.verified) },
    { key: 'builtByMe', tone: 'mine', items: text(props.evidence.builtByMe) },
    {
      key: 'providedByTeam',
      tone: 'team',
      items: props.evidence.providedByTeam ? text(props.evidence.providedByTeam) : [],
    },
    { key: 'limitations', tone: 'warn', items: text(props.evidence.limitations) },
    { key: 'planned', tone: 'plan', items: text(props.evidence.planned) },
    {
      key: 'cannotShow',
      tone: 'warn',
      items: props.evidence.cannotShow ? text(props.evidence.cannotShow) : [],
    },
  ]
  return all.filter((block) => block.items.length > 0)
})
</script>

<template>
  <section class="evidence" aria-labelledby="evidence-title">
    <div class="evidence__head">
      <p class="mono-label evidence__eyebrow" aria-hidden="true">15 //</p>
      <h2 id="evidence-title" class="evidence__title">{{ t('evidence.title') }}</h2>
      <p class="evidence__intro">{{ t('evidence.intro') }}</p>
    </div>

    <div class="evidence__grid">
      <section v-for="block in blocks" :key="block.key" class="block" :class="`block--${block.tone}`">
        <h3 class="block__title">{{ t(`evidence.${block.key}`) }}</h3>
        <ul class="block__list">
          <li v-for="item in block.items" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.evidence {
  margin-top: var(--space-8);
  padding: var(--space-6);
  background-color: var(--surface);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius);
}

.evidence__head {
  display: grid;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.evidence__eyebrow {
  color: var(--cyan);
}

.evidence__title {
  font-size: var(--text-xl);
}

.evidence__intro {
  color: var(--muted);
  font-size: var(--text-sm);
}

.evidence__grid {
  display: grid;
  gap: var(--space-5);
}

@media (min-width: 840px) {
  .evidence__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.block {
  padding-left: var(--space-4);
  border-left: 2px solid var(--border-strong);
}

.block--verified {
  border-left-color: var(--success);
}

.block--mine {
  border-left-color: var(--cyan);
}

.block--team {
  border-left-color: var(--blue);
}

.block--warn {
  border-left-color: var(--warning);
}

.block--plan {
  border-left-color: var(--muted);
}

.block__title {
  margin-bottom: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
}

.block__list {
  display: grid;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--muted);
}

.block__list > li {
  position: relative;
  padding-left: var(--space-4);
}

.block__list > li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border-strong);
}
</style>
