<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { profile } from '@/data/profile'

/** Closing section: one clear endpoint (email) and two secondary channels. */
const { t } = useI18n()
const { text, routeTo } = useLocale()
</script>

<template>
  <div class="endpoint">
    <div class="endpoint__lead">
      <p class="endpoint__prompt">{{ t('home.contactPrompt') }}</p>
      <p class="endpoint__headline">{{ t('home.contactHeadline') }}</p>
      <p class="status-line">
        <span class="status-line__dot" aria-hidden="true"></span>
        {{ text(profile.availabilityShort) }}
      </p>
    </div>

    <div class="endpoint__channels">
      <a class="endpoint__primary" :href="`mailto:${profile.email}`">
        <span class="endpoint__scheme" aria-hidden="true">mailto:</span>
        <span class="endpoint__address">{{ profile.email }}</span>
        <span class="endpoint__action">{{ t('actions.emailMe') }} →</span>
      </a>
      <ul class="endpoint__secondary">
        <li>
          <a class="button" :href="profile.github" rel="noopener noreferrer" target="_blank">
            {{ t('actions.github') }} ↗
          </a>
        </li>
        <li>
          <a class="button" :href="profile.linkedin" rel="noopener noreferrer" target="_blank">
            {{ t('actions.linkedin') }} ↗
          </a>
        </li>
        <li>
          <RouterLink class="button" :to="routeTo('projects')">{{ t('actions.viewProjects') }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.endpoint {
  display: grid;
  gap: var(--space-7);
  padding: var(--space-6);
  background:
    linear-gradient(135deg, rgba(81, 227, 209, 0.05), transparent 45%),
    var(--surface);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
}

@media (min-width: 900px) {
  .endpoint {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    padding: var(--space-8) var(--space-7);
  }
}

.endpoint__lead {
  display: grid;
  gap: var(--space-4);
  justify-items: start;
}

.endpoint__prompt {
  color: var(--text-soft);
}

.endpoint__headline {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.endpoint__channels {
  display: grid;
  gap: var(--space-4);
}

.endpoint__primary {
  display: grid;
  gap: var(--space-1);
  padding: var(--space-5);
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-strong);
  border-left: 2px solid var(--cyan);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text);
  transition: border-color var(--transition), transform 240ms var(--ease-out);
}

.endpoint__primary:hover {
  border-color: var(--cyan);
  color: var(--text);
  transform: translateX(3px);
}

.endpoint__scheme {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.endpoint__address {
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 0.8rem + 0.7vw, 1.25rem);
  overflow-wrap: anywhere;
}

.endpoint__action {
  margin-top: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cyan);
}

.endpoint__secondary {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

@media (max-width: 519px) {
  .endpoint__secondary li,
  .endpoint__secondary .button {
    flex: 1 1 100%;
    width: 100%;
  }
}
</style>
