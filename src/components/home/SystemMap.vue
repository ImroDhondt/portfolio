<script setup lang="ts">
import { useI18n } from 'vue-i18n'

/**
 * Static map of the areas Imro works in. A diagram, not live data.
 */
const { t } = useI18n()

interface Domain {
  key: string
  x: number
  y: number
  /** Which side of the node the label sits on, away from its link line. */
  labels: 'above' | 'below'
}

const domains: Domain[] = [
  { key: 'web', x: 86, y: 78, labels: 'above' },
  { key: 'android', x: 352, y: 70, labels: 'above' },
  { key: 'distributed', x: 392, y: 204, labels: 'below' },
  { key: 'gamedev', x: 318, y: 298, labels: 'below' },
  { key: 'deployment', x: 76, y: 262, labels: 'below' },
]

function labelY(domain: Domain): number {
  return domain.labels === 'above' ? domain.y - 16 : domain.y + 24
}

const center = { x: 214, y: 176 }
</script>

<template>
  <svg class="map" viewBox="0 0 460 360" role="img" aria-labelledby="system-map-title">
    <title id="system-map-title">{{ t('home.map.label') }}</title>

    <circle class="map__orbit" :cx="center.x" :cy="center.y" r="84" />
    <circle class="map__orbit map__orbit--outer" :cx="center.x" :cy="center.y" r="150" />

    <path
      v-for="domain in domains"
      :key="`link-${domain.key}`"
      class="map__link"
      pathLength="1"
      :d="`M${center.x} ${center.y}L${domain.x} ${domain.y}`"
    />
    <!-- Android and game development meet in the same project. -->
    <path class="map__bridge" d="M352 70Q420 190 318 298" />

    <g class="map__core">
      <rect :x="center.x - 38" :y="center.y - 16" width="76" height="32" rx="16" />
      <text :x="center.x" :y="center.y + 4" text-anchor="middle">imro</text>
    </g>

    <g v-for="domain in domains" :key="domain.key" class="map__domain">
      <circle :cx="domain.x" :cy="domain.y" r="6" />
      <text class="map__label" :x="domain.x" :y="labelY(domain)" text-anchor="middle">
        {{ t(`home.map.${domain.key}`) }}
      </text>
    </g>
  </svg>
</template>

<style scoped>
.map {
  width: 100%;
  height: auto;
  overflow: visible;
  font-family: var(--font-mono);
}

.map__orbit {
  fill: none;
  stroke: var(--border);
  stroke-dasharray: 2 6;
}

.map__orbit--outer {
  stroke: color-mix(in srgb, var(--border) 60%, transparent);
}

.map__link {
  fill: none;
  stroke: color-mix(in srgb, var(--cyan) 45%, transparent);
  stroke-width: 1;
}

.map__bridge {
  fill: none;
  stroke: var(--border-strong);
  stroke-dasharray: 3 5;
}

.map__core rect {
  fill: var(--bg-elevated);
  stroke: var(--cyan);
}

.map__core text {
  fill: var(--cyan-bright);
  font-size: 13px;
}

.map__domain circle {
  fill: var(--bg);
  stroke: var(--cyan);
  stroke-width: 1.5;
}

.map__label {
  fill: var(--text);
  font-size: 11px;
  letter-spacing: 0.12em;
}


@media (prefers-reduced-motion: no-preference) {
  .map__link {
    stroke-dasharray: 1;
    animation: link-draw 900ms var(--ease-out) both;
  }

  .map__link:nth-of-type(2) { animation-delay: 80ms; }
  .map__link:nth-of-type(3) { animation-delay: 160ms; }
  .map__link:nth-of-type(4) { animation-delay: 240ms; }
  .map__link:nth-of-type(5) { animation-delay: 320ms; }
}

@keyframes link-draw {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
