<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import LocaleSwitch from './LocaleSwitch.vue'

const { t } = useI18n()
const { routeTo } = useLocale()
const route = useRoute()

const links = computed(() => [
  { name: 'home', label: t('nav.home') },
  { name: 'projects', label: t('nav.projects') },
  { name: 'about', label: t('nav.about') },
  { name: 'skills', label: t('nav.skills') },
  // 'notes' is intentionally absent: the section is built but has no real
  // content yet. Re-add this entry to publish it.
  { name: 'contact', label: t('nav.contact') },
])

const menuOpen = ref(false)
const panel = ref<HTMLElement | null>(null)

// A detail page stays under its section in the navigation.
function isCurrent(name: string): boolean {
  if (name === 'projects') return route.name === 'projects' || route.name === 'project'
  if (name === 'notes') return route.name === 'notes' || route.name === 'note'
  return route.name === name
}

watch(() => route.fullPath, () => {
  menuOpen.value = false
})

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
  }
}
</script>

<template>
  <nav class="nav" :aria-label="t('nav.label')" @keydown="onKeydown">
    <ul class="nav__list nav__list--desktop">
      <li v-for="link in links" :key="link.name">
        <RouterLink
          class="nav__link"
          :class="{ 'nav__link--current': isCurrent(link.name) }"
          :to="routeTo(link.name)"
          :aria-current="isCurrent(link.name) ? 'page' : undefined"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>

    <LocaleSwitch class="nav__locale" />

    <button
      type="button"
      class="nav__toggle"
      :aria-expanded="menuOpen"
      aria-controls="mobile-nav"
      @click="menuOpen = !menuOpen"
    >
      <span class="visually-hidden">{{ menuOpen ? t('nav.closeMenu') : t('nav.openMenu') }}</span>
      <span class="nav__bars" aria-hidden="true">
        <span :class="{ 'nav__bar--open': menuOpen }"></span>
        <span :class="{ 'nav__bar--open': menuOpen }"></span>
      </span>
    </button>

    <div v-show="menuOpen" id="mobile-nav" ref="panel" class="nav__panel">
      <ul class="nav__list nav__list--mobile">
        <li v-for="link in links" :key="link.name">
          <RouterLink
            class="nav__link nav__link--mobile"
            :class="{ 'nav__link--current': isCurrent(link.name) }"
            :to="routeTo(link.name)"
            :aria-current="isCurrent(link.name) ? 'page' : undefined"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav__list {
  display: flex;
  gap: var(--space-1);
}

.nav__list--desktop {
  display: none;
}

.nav__link {
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--muted);
  transition: color var(--transition), background-color var(--transition);
}

.nav__link:hover {
  color: var(--text);
  background-color: var(--surface-elevated);
}

.nav__link--current {
  color: var(--cyan);
  box-shadow: inset 0 -2px 0 var(--cyan);
}

.nav__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.nav__bars {
  display: grid;
  gap: 5px;
}

.nav__bars span {
  display: block;
  width: 18px;
  height: 2px;
  background-color: var(--text);
  transition: transform var(--transition);
}

.nav__bar--open:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.nav__bar--open:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.nav__panel {
  position: absolute;
  inset-inline: 0;
  top: 100%;
  padding: var(--space-3) var(--space-4) var(--space-5);
  background-color: var(--surface);
  border-block: var(--border-width) solid var(--border);
}

.nav__list--mobile {
  flex-direction: column;
  gap: var(--space-1);
}

.nav__link--mobile {
  display: block;
  padding: var(--space-3);
  font-size: var(--text-sm);
}

@media (min-width: 880px) {
  .nav__list--desktop {
    display: flex;
  }

  .nav__toggle,
  .nav__panel {
    display: none;
  }
}
</style>
