<script lang="ts" setup>
const year = new Date().getFullYear();

/* global __APP_VERSION__ */
const version = __APP_VERSION__;
</script>

<template>
	<footer
		class="container flex w-full py-5 sm:py-8 md:py-12 justify-between text-secondary-400 opacity-40 font-mono text-sm select-none"
	>
		<div>
			<router-link
				to="/imprint"
				class="hover:text-secondary-600 transition-colors"
			>
				Imprint
			</router-link>
		</div>
		<div>
			<span>{{ year }} &copy; Marvin Heilemann</span>
			<span> &middot; </span>
			<a
				href="https://github.com/muuvmuuv/portfolio"
				target="_blank"
				class="hover:text-secondary-600 transition-colors"
			>
				v{{ version }}
			</a>
		</div>
	</footer>
</template>

<style scoped>
footer {
	mix-blend-mode: exclusion;
}
</style>
