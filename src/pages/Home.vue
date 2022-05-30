<template>
  <section class="container">
    <h1
      class="font-black text-mud-shade tracking-wider uppercase select-none text mt-32 opacity-30 md:-ml-2"
      data-text="Marvin"
    >
      Marvin
    </h1>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

@mixin glitch-copy {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  content: attr(data-text);
}

h1 {
  position: relative;

  font-size: max(17vw, 100px);
  font-feature-settings: 'cpsp';
  line-height: 0.75;

  mix-blend-mode: hard-light;

  &::before {
    @include glitch-copy;

    left: 2px;

    clip: rect(44px, 450px, 56px, 0);

    text-shadow: -3px 0 11px theme('colors.primary.DEFAULT');

    animation: glitch-anim 3s infinite linear alternate-reverse;
  }

  &::after {
    @include glitch-copy;

    left: -2px;

    clip: rect(44px, 450px, 56px, 0);

    text-shadow: -4px 0 0 theme('colors.primary.DEFAULT'),
      2px 3px 0 theme('colors.primary.DEFAULT');

    animation: glitch-anim2 3s infinite linear alternate-reverse;
  }
}

@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i * math.div(1, $steps))} {
      clip: rect(math.random(100) + px, 9999px, math.random(100) + px, 0);

      transform: skew(math.div(math.random(100), 100) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i * math.div(1, $steps))} {
      clip: rect(math.random(100) + px, 9999px, math.random(100) + px, 0);

      transform: skew(math.div(math.random(100), 100) + deg);
    }
  }
}
</style>
