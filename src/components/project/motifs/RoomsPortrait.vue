<!-- Adria, portrait: a floor plan of room tiles linked by one device signal line. -->
<template>
  <svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
    <rect class="m-node" x="14" y="16" width="34" height="46" rx="3" />
    <rect class="m-node m-node--active" x="52" y="16" width="34" height="46" rx="3" />
    <rect class="m-node" x="14" y="68" width="72" height="50" rx="3" />
    <rect class="m-node" x="14" y="124" width="34" height="58" rx="3" />
    <rect class="m-node" x="52" y="124" width="34" height="58" rx="3" />
    <path class="m-line m-draw" pathLength="1" d="M69 40V94H31V154" stroke-dasharray="2 5" />
    <g class="m-fill">
      <circle cx="69" cy="40" r="3.5" />
      <circle cx="69" cy="94" r="3" />
      <circle cx="31" cy="94" r="3" />
      <circle cx="31" cy="154" r="3" />
    </g>
    <path class="m-line" d="M76 26A10 10 0 0 1 80 34" />
  </svg>
</template>
