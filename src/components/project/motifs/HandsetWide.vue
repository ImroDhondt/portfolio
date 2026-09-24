<!-- Freeze or Sneeze, landscape: a handset held sideways, a patient simulation on its screen. -->
<template>
  <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet">
    <rect class="m-node" x="56" y="24" width="248" height="152" rx="20" />
    <path class="m-dim" d="M70 84V116" />
    <g class="m-dim">
      <path v-for="x in 5" :key="x" :d="`M${72 + x * 36} 40V160`" />
    </g>
    <path class="m-line m-draw" pathLength="1" d="M112 70L166 98L140 138L214 150L204 108L250 72" />
    <circle class="m-dim" cx="166" cy="98" r="24" stroke-dasharray="3 4" />
    <circle class="m-node m-node--active" cx="166" cy="98" r="11" />
    <circle class="m-fill" cx="166" cy="98" r="4" />
    <g class="m-fill">
      <circle cx="112" cy="70" r="5" />
      <circle cx="250" cy="72" r="5" />
      <circle cx="140" cy="138" r="5" />
      <circle cx="214" cy="150" r="5" />
    </g>
    <g class="m-fill m-faint">
      <circle cx="204" cy="108" r="4" />
      <circle cx="274" cy="118" r="3" />
      <circle cx="96" cy="120" r="3" />
    </g>
    <rect class="m-line" x="232" y="146" width="56" height="10" rx="5" />
    <rect class="m-fill" x="232" y="146" width="32" height="10" rx="5" />
  </svg>
</template>
