<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

import Headline from '../components/Headline.vue'

const Nova = defineAsyncComponent(() => import('../components/Nova.vue'))
</script>

<template>
  <Nova class="-z-10 fixed bottom-0 right-0 opacity-40"></Nova>

  <section class="container">
    <h1 class="text-secondary-900 select-none opacity-10 mt-32">
      <Headline class="not-sr-only !w-[98vw] !min-w-[1000px]"></Headline>
      <span class="sr-only">MARVIN</span>
    </h1>
  </section>

  <section class="container">
    <div class="mt-12 text-secondary-200 opacity-30 text-4xl">
      <ul class="list-none flex gap-x-6">
        <li>
          <a
            target="_blank"
            class="transition-colors hover:text-secondary-400"
            href="https://github.com/muuvmuuv"
          >
            <icon icon="fab fa-github-square"></icon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            class="transition-colors hover:text-secondary-400"
            href="https://twitter.com/muuvmuuv"
          >
            <icon icon="fab fa-twitter-square"></icon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            class="transition-colors hover:text-secondary-400"
            href="https://instagram.com/the_marvin17"
          >
            <icon icon="fab fa-instagram-square"></icon>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
