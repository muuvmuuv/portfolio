<template>
	<article class="text-slate-100">
		<slot />
	</article>
</template>

<style lang="scss">
article {

	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	figure,
	p,
	pre,
	ul,
	ol,
	img,
	picture,
	iframe {
		@apply mb-4;
	}

	// Utils

	a {
		@apply underline underline-offset-1 decoration-dotted decoration-slate-400;
	}

	hr {
		@apply border-secondary-400;
	}

	// Headlines

	h1 {
		@apply text-4xl;
	}

	h2 {
		@apply text-3xl;
	}

	h3 {
		@apply text-2xl;
	}

	h4 {
		@apply text-xl;
	}

	h5 {
		@apply text-lg;
	}

	h6 {
		@apply text-sm text-slate-600;
	}

	h1,
	h2 {
		@apply text-primary drop-shadow-primary shadow-primary;
	}

	h3,
	h4,
	h5 {
		@apply text-slate-400;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		+ {

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				@apply -mt-3 mb-5;
			}
		}
	}

	// Lists

	ul,
	ol {
		list-style-position: outside;
	}

	ul {
		>li::before {
			content: "＿";

			@apply align-text-bottom text-slate-400 mr-2;
		}
	}
}
</style>
