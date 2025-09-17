<template>
	<article class="prose prose-slate prose-invert max-w-none prose-lg custom-list">
		<slot />
	</article>
</template>

<style scoped>
@reference "../main.css";

.custom-list ul > li::before {
	content: "＿";
	@apply align-text-bottom text-slate-400 mr-2;
}
</style>
