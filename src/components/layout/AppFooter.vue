<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__line">{{ t('footer.rights', { year }) }}</p>
      <ul class="footer__links">
        <li>
          <a :href="`mailto:${profile.email}`">{{ t('contact.emailLabel') }}</a>
        </li>
        <li>
          <a :href="profile.github" rel="noopener noreferrer" target="_blank">{{ t('actions.github') }}</a>
        </li>
        <li>
          <a :href="profile.linkedin" rel="noopener noreferrer" target="_blank">{{ t('actions.linkedin') }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: var(--space-9);
  border-top: var(--border-width) solid var(--border);
  background-color: var(--surface);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-6);
}

.footer__line {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--muted);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
</style>
