<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>

  <main>
    <router-view></router-view>
  </main>

  <Footer></Footer>
</template>
