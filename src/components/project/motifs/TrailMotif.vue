<!-- Ghost Haunter: an unfinished progression chain; later nodes are still open. -->
<template>
  <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet">
    <path class="m-line m-draw" pathLength="1" d="M30 150C80 150 80 110 130 110S180 70 230 70" />
    <path class="m-dim" d="M239 68C270 64 290 42 321 40" stroke-dasharray="3 6" />
    <circle class="m-node m-node--active" cx="30" cy="150" r="9" />
    <circle class="m-node m-node--active" cx="130" cy="110" r="9" />
    <circle class="m-node" cx="230" cy="70" r="9" />
    <circle class="m-dim-node" cx="330" cy="40" r="9" />
    <g class="m-fill">
      <circle cx="30" cy="150" r="3" />
      <circle cx="130" cy="110" r="3" />
    </g>
    <g class="m-fill m-faint">
      <circle cx="160" cy="150" r="2" />
      <circle cx="176" cy="142" r="2.5" />
      <circle cx="194" cy="136" r="3" />
    </g>
    <g class="m-dim">
      <path v-for="i in 6" :key="i" :d="`M${22 + i * 24} 182V${182 - i * 3}`" />
    </g>
  </svg>
</template>
