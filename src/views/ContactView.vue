<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'
import PageHeader from '@/components/layout/PageHeader.vue'

const { t } = useI18n()
const { text } = useLocale()

useSeo({
  title: () => t('meta.contact'),
  description: () => t('meta.contactDescription'),
})

const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    window.setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Clipboard access can be blocked; the address stays visible as a link.
    copied.value = false
  }
}
</script>

<template>
  <div class="container container--narrow">
    <PageHeader eyebrow="05 //" :title="t('contact.title')" :intro="t('contact.intro')" />

    <ul class="channels">
      <li class="channel surface">
        <p class="mono-label">{{ t('contact.emailLabel') }}</p>
        <a class="channel__value" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <button type="button" class="channel__copy" @click="copyEmail">
          {{ copied ? t('actions.copied') : t('actions.copyEmail') }}
        </button>
        <span class="visually-hidden" role="status" aria-live="polite">
          {{ copied ? t('actions.copied') : '' }}
        </span>
      </li>

      <li class="channel surface">
        <p class="mono-label">{{ t('contact.githubLabel') }}</p>
        <a class="channel__value" :href="profile.github" rel="noopener noreferrer" target="_blank">
          github.com/ImroDhondt ↗
        </a>
      </li>

      <li class="channel surface">
        <p class="mono-label">{{ t('contact.linkedinLabel') }}</p>
        <a class="channel__value" :href="profile.linkedin" rel="noopener noreferrer" target="_blank">
          linkedin.com/in/imro-dhondt ↗
        </a>
      </li>
    </ul>

    <section class="availability surface">
      <h2 class="mono-label availability__title">{{ t('contact.availabilityTitle') }}</h2>
      <p>{{ text(profile.availability) }}</p>
    </section>

    <p class="noform">{{ t('contact.noForm') }}</p>
  </div>
</template>

<style scoped>
.channels {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 720px) {
  .channels {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.channel {
  display: grid;
  gap: var(--space-2);
  align-content: start;
  padding: var(--space-5);
}

.channel__value {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  word-break: break-word;
}

.channel__copy {
  justify-self: start;
  margin-top: var(--space-2);
  padding: var(--space-1) var(--space-3);
  background: transparent;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.channel__copy:hover {
  color: var(--cyan);
  border-color: var(--cyan);
}

.availability {
  margin-top: var(--space-6);
  padding: var(--space-5);
  color: var(--muted);
}

.availability__title {
  margin-bottom: var(--space-3);
  color: var(--cyan);
}

.noform {
  margin-top: var(--space-5);
  font-size: var(--text-sm);
  color: var(--muted);
}
</style>
