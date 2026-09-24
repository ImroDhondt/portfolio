<!-- Howestprime: services on both sides exchanging events through a broker. -->
<template>
  <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet">
    <path class="m-dim" d="M20 100H340" />
    <path class="m-line m-draw" pathLength="1" d="M72 60C120 60 130 100 180 100C230 100 240 60 288 60" />
    <path class="m-line m-draw" pathLength="1" d="M72 140C120 140 130 100 180 100C230 100 240 140 288 140" />
    <rect class="m-node" x="24" y="40" width="48" height="40" rx="4" />
    <rect class="m-node" x="24" y="120" width="48" height="40" rx="4" />
    <rect class="m-node" x="288" y="40" width="48" height="40" rx="4" />
    <rect class="m-node" x="288" y="120" width="48" height="40" rx="4" />
    <rect class="m-node m-node--active" x="156" y="84" width="48" height="32" rx="16" />
    <g class="m-fill">
      <circle cx="112" cy="68" r="3" />
      <circle cx="238" cy="72" r="3" />
      <circle cx="128" cy="126" r="3" />
    </g>
    <g class="m-fill m-faint">
      <rect v-for="i in 9" :key="i" :x="20 + i * 30" y="182" width="16" height="4" rx="1" />
    </g>
  </svg>
</template>
