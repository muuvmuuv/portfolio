<script setup lang="ts">
import Logo from "./Logo.vue";

// For menu https://codepen.io/tinkletons/pen/EJVOPO
// Satellite https://codepen.io/chrisgannon/pen/EjVyXN
</script>

<template>
	<header class="container flex w-full py-5 sm:py-8 md:py-12">
		<router-link
			id="logo"
			class="block text-primary h-6 shadow-primary select-none drop-shadow-primary"
			to="/"
		>
			<Logo />
		</router-link>
	</header>
</template>

<style lang="scss">
#logo {
	filter: drop-shadow(0 0 19px var(--tw-shadow-color));
	animation: m-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes m-pulse {
	50% {
		filter: drop-shadow(0 0 14px var(--tw-shadow-color));
	}
}
</style>
