<script lang="ts" setup>
import anime from 'animejs'
import { onMounted, ref } from 'vue'

// https://codepen.io/chrisgannon/pen/LEQmwP

const group = ref<SVGElement>()

onMounted(() => {
  if (!group.value) {
    return
  }

  anime({
    targets: group.value.children,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (_, index) {
      return index * 217
    },
    loop: false,
  })

  // for (const child of group.value.children) {
  //   if (child instanceof SVGGeometryElement) {
  //     const path = anime.path(child)

  //     anime({
  //       targets: child,
  //       translateX: path('x'),
  //       translateY: path('y'),
  //       rotate: path('angle'),
  //       easing: 'linear',
  //       duration: 5000,
  //       loop: true,
  //     })
  //   }
  // }
})
</script>

<template>
  <svg viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg">
    <g class="a" fill="currentColor" fill-rule="nonzero">
      <path
        d="m0 0v110h29.0512647v-64.0234375h.854449l24.3517954 63.1640625h17.5162038l24.3517954-62.734375h.854449v63.59375h29.0512647v-110h-36.9549176l-25.4198567 62.3046875h-1.2816734l-25.4198567-62.3046875z"
      />
      <path
        d="m185.585265 110 6.301561-21.0546875h36.100469l6.301561 21.0546875h32.041836l-36.100468-110h-40.586326l-36.100469 110zm13.030347-43.3984375 10.894224-36.3085937h.854449l10.894225 36.3085937z"
      />
      <path
        d="m293.842665 110h29.692101v-36.3085938h10.253388l19.225101 36.3085938h32.255449l-22.215673-41.0351562c11.641867-5.6396485 18.584265-16.328125 18.584265-31.5820313 0-23.4179687-16.287934-37.3828125-40.586326-37.3828125h-47.208305zm29.692101-59.5117187v-26.640625h10.467c10.413597 0 16.661755 4.0820312 16.661755 13.5351562 0 9.3994141-6.248158 13.1054688-16.661755 13.1054688z"
      />
      <path
        d="m437.773049 0h-33.537121l36.100468 110h40.586326l36.100469-110h-33.537122l-22.429285 77.5585938h-.854449z"
      />
      <path d="m574.227265 0h-29.692102v110h29.692102z" />
      <path
        d="m700 0h-29.692101v57.578125h-.854449l-38.877428-57.578125h-25.206245v110h29.692102v-57.7929688h.640837l39.518264 57.7929688h24.77902z"
      />
    </g>
    <g ref="group" class="o" fill="none" fill-rule="nonzero">
      <path
        d="m0 0v110h29.0512647v-64.0234375h.854449l24.3517954 63.1640625h17.5162038l24.3517954-62.734375h.854449v63.59375h29.0512647v-110h-36.9549176l-25.4198567 62.3046875h-1.2816734l-25.4198567-62.3046875z"
      />
      <path
        d="m185.585265 110 6.301561-21.0546875h36.100469l6.301561 21.0546875h32.041836l-36.100468-110h-40.586326l-36.100469 110zm13.030347-43.3984375 10.894224-36.3085937h.854449l10.894225 36.3085937z"
      />
      <path
        d="m293.842665 110h29.692101v-36.3085938h10.253388l19.225101 36.3085938h32.255449l-22.215673-41.0351562c11.641867-5.6396485 18.584265-16.328125 18.584265-31.5820313 0-23.4179687-16.287934-37.3828125-40.586326-37.3828125h-47.208305zm29.692101-59.5117187v-26.640625h10.467c10.413597 0 16.661755 4.0820312 16.661755 13.5351562 0 9.3994141-6.248158 13.1054688-16.661755 13.1054688z"
      />
      <path
        d="m437.773049 0h-33.537121l36.100468 110h40.586326l36.100469-110h-33.537122l-22.429285 77.5585938h-.854449z"
      />
      <path d="m574.227265 0h-29.692102v110h29.692102z" />
      <path
        d="m700 0h-29.692101v57.578125h-.854449l-38.877428-57.578125h-25.206245v110h29.692102v-57.7929688h.640837l39.518264 57.7929688h24.77902z"
      />
    </g>
    <defs>
      <filter id="glow" x="-1000%" y="-1000%" width="2000%" height="2000%">
        <feFlood result="flood" flood-color="#ff2aa7" flood-opacity=".4"></feFlood>
        <feComposite
          in="flood"
          result="mask"
          in2="SourceGraphic"
          operator="in"
        ></feComposite>
        <feMorphology
          in="mask"
          result="dilated"
          operator="dilate"
          radius="3"
        ></feMorphology>
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="8"></feGaussianBlur>
        <feMerge>
          <feMergeNode in="blurred"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
  </svg>
</template>

<style lang="scss" scoped>
.a {
  opacity: 0.1;

  stroke: #373945;
}

.o {
  opacity: 0.6;

  animation: flicker 3s infinite;

  path {
    filter: url('#glow');

    stroke: #ff2aa7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1;
  }
}

@keyframes flicker {
  0% {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  100% {
    opacity: 1;
  }
}
</style>
