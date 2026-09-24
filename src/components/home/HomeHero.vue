<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { profile } from '@/data/profile'
import SystemMap from './SystemMap.vue'

const { t } = useI18n()
const { text, routeTo } = useLocale()
</script>

<template>
  <section class="hero" aria-labelledby="hero-name">
    <div class="hero__identity">
      <p class="hero__prompt" aria-hidden="true">
        <span class="hero__user">imro@portfolio</span>:<span class="hero__path">~</span>$
        {{ t('home.command') }}<span class="hero__cursor"></span>
      </p>
      <h1 id="hero-name" class="hero__name">{{ profile.name }}</h1>
      <p class="hero__positioning">{{ text(profile.positioning) }}</p>
      <p class="hero__intro">{{ text(profile.shortIntro) }}</p>
      <div class="hero__actions">
        <RouterLink class="button button--primary" :to="routeTo('projects')">
          {{ t('actions.viewProjects') }}
        </RouterLink>
        <RouterLink class="button" :to="routeTo('about')">{{ t('actions.aboutMe') }}</RouterLink>
      </div>
      <p class="status-line hero__availability">
        <span class="status-line__dot" aria-hidden="true"></span>
        {{ text(profile.availabilityShort) }}
      </p>
    </div>

    <div class="hero__workbench">
      <SystemMap class="hero__map" />
      <section class="state" aria-labelledby="status-title">
        <h2 id="status-title" class="state__title">{{ t('home.statusTitle') }}</h2>
        <dl class="state__rows">
          <div v-for="row in profile.statusRows" :key="row.key" class="state__row">
            <dt>{{ row.key }}</dt>
            <dd>{{ text(row.value) }}</dd>
          </div>
        </dl>
      </section>
    </div>
  </section>
</template>

<style scoped src="./home-hero.css"></style>
