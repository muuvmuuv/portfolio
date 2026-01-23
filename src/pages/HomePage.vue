<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

import Headline from "../components/HeadlineTag.vue";

const Nova = defineAsyncComponent(() => import("../components/NovaGlobe.vue"));
</script>

<template>
	<Transition appear>
		<Nova class="-z-10 fixed bottom-0 left-0 opacity-20" />
	</Transition>

	<section class="container">
		<h1 class="text-secondary-900 select-none mt-8 sm:mt-20 md:mt-32">
			<Headline
				class="not-sr-only fixed sm:relative top-0 left-[110%] sm:left-auto origin-top-left rotate-90 sm:rotate-0 sm:w-[98vw]! sm:min-w-[1000px]! w-[83vh]" />
			<span class="sr-only">MARVIN</span>
		</h1>
	</section>

	<section class="container">
		<div class="mt-12 text-secondary-200 opacity-30 text-4xl">
			<ul class="list-none flex gap-x-6">
				<li>
					<a target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-secondary-400"
						href="https://github.com/muuvmuuv" aria-label="GitHub profile">
						<FaIcon icon="fab fa-github-square" width-auto />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-secondary-400"
						href="https://twitter.com/muuvmuuv" aria-label="X (Twitter) profile">
						<FaIcon icon="fab fa-square-x-twitter" width-auto />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-secondary-400"
						href="https://instagram.com/the_marvin17" aria-label="Instagram profile">
						<FaIcon icon="fab fa-instagram-square" width-auto />
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>
