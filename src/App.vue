<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
	<Header />

	<main>
		<router-view />
	</main>

	<Footer />

	<SpeedInsights />
	<Analytics />
</template>
