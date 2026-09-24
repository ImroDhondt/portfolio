<!-- QHSE: workflow states on a structured grid, with an audit timeline below. -->
<template>
  <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet">
    <g class="m-dim">
      <path v-for="x in 8" :key="`v${x}`" :d="`M${x * 40} 20V150`" />
      <path v-for="y in 3" :key="`h${y}`" :d="`M20 ${y * 40 + 10}H340`" />
    </g>
    <path class="m-line m-draw" pathLength="1" d="M52 70H128M160 70H228M260 70H312" />
    <path class="m-line" d="M244 86V118H144V86" stroke-dasharray="3 4" />
    <rect class="m-node" x="20" y="54" width="32" height="32" rx="3" />
    <rect class="m-node" x="128" y="54" width="32" height="32" rx="3" />
    <rect class="m-node m-node--active" x="228" y="54" width="32" height="32" rx="3" />
    <circle class="m-node" cx="324" cy="70" r="12" />
    <rect class="m-fill" x="236" y="62" width="16" height="16" rx="2" />
    <path class="m-line" d="M20 172H340" />
    <g class="m-fill">
      <rect
        v-for="(x, i) in [28, 62, 118, 142, 196, 238, 252, 300]"
        :key="i"
        :x="x"
        y="166"
        width="2"
        height="12"
      />
    </g>
  </svg>
</template>
