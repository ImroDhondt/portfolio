<!-- QHSE, portrait: workflow states top to bottom, rework loop and audit ticks beside them. -->
<template>
  <svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
    <path class="m-line m-draw" pathLength="1" d="M44 42V66M44 90V114M44 138V160" />
    <path class="m-line" d="M60 126H72V78H60" stroke-dasharray="3 4" />
    <rect class="m-node" x="32" y="18" width="24" height="24" rx="3" />
    <rect class="m-node" x="32" y="66" width="24" height="24" rx="3" />
    <rect class="m-node m-node--active" x="32" y="114" width="24" height="24" rx="3" />
    <rect class="m-fill" x="38" y="120" width="12" height="12" rx="2" />
    <circle class="m-node" cx="44" cy="172" r="10" />
    <path class="m-line" d="M88 16V186" />
    <g class="m-fill">
      <rect v-for="(y, i) in [24, 46, 62, 98, 120, 148, 170]" :key="i" x="84" :y="y" width="8" height="2" />
    </g>
  </svg>
</template>
