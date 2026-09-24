<!-- Freeze or Sneeze: a portrait handset holding a spatial simulation of patients. -->
<template>
  <svg viewBox="0 0 220 300" preserveAspectRatio="xMidYMid meet">
    <rect class="m-node" x="50" y="20" width="120" height="240" rx="18" />
    <path class="m-dim" d="M92 34H128" />
    <g class="m-dim">
      <path v-for="y in 5" :key="y" :d="`M62 ${50 + y * 32}H158`" />
    </g>
    <path class="m-line m-draw" pathLength="1" d="M78 96L112 130L94 178L140 200L128 150L146 112" />
    <circle class="m-node m-node--active" cx="112" cy="130" r="9" />
    <circle class="m-fill" cx="112" cy="130" r="3" />
    <g class="m-fill">
      <circle cx="78" cy="96" r="4" />
      <circle cx="146" cy="112" r="4" />
      <circle cx="94" cy="178" r="4" />
      <circle cx="140" cy="200" r="4" />
    </g>
    <g class="m-fill m-faint">
      <circle cx="128" cy="150" r="3" />
      <circle cx="70" cy="226" r="2" />
      <circle cx="152" cy="236" r="2" />
    </g>
    <rect class="m-line" x="72" y="232" width="76" height="10" rx="5" />
    <rect class="m-fill" x="72" y="232" width="44" height="10" rx="5" />
    <path class="m-dim" d="M20 284H200" stroke-dasharray="2 6" />
  </svg>
</template>
