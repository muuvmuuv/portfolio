<script lang="ts" setup>
const year = new Date().getFullYear()
const version = __APP_VERSION__
</script>

<template>
  <footer
    class="container flex w-full pb-12 pt-12 justify-between text-mud-tint opacity-60 font-mono text-sm"
  >
    <div class="text-mud-tint">
      <router-link to="/imprint" class="hover:text-mud-shade transition-colors"
        >Imprint</router-link
      >
    </div>
    <div class="select-none">
      <span>{{ year }} &copy; Marvin Heilemann</span>
      <span> &middot; </span>
      <a
        href="https://github.com/muuvmuuv/portfolio"
        target="_blank"
        class="hover:text-mud-shade transition-colors"
        >v{{ version }}</a
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  mix-blend-mode: exclusion;
}
</style>
