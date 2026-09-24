<!-- Adria: room tiles on a floor plan, linked by device signal lines. -->
<template>
  <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet">
    <rect class="m-node" x="24" y="30" width="96" height="64" rx="3" />
    <rect class="m-node" x="132" y="30" width="96" height="64" rx="3" />
    <rect class="m-node m-node--active" x="240" y="30" width="96" height="64" rx="3" />
    <rect class="m-node" x="24" y="106" width="150" height="64" rx="3" />
    <rect class="m-node" x="186" y="106" width="150" height="64" rx="3" />
    <path class="m-line m-draw" pathLength="1" d="M72 62H288" />
    <path class="m-line m-draw" pathLength="1" d="M100 138H260" />
    <g class="m-fill">
      <circle cx="72" cy="62" r="4" />
      <circle cx="180" cy="62" r="4" />
      <circle cx="288" cy="62" r="5" />
      <circle cx="100" cy="138" r="4" />
      <circle cx="260" cy="138" r="4" />
    </g>
    <path class="m-line" d="M302 48A18 18 0 0 1 318 62M298 38A30 30 0 0 1 326 62" />
  </svg>
</template>
