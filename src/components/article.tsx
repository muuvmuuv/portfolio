import type { ComponentChildren } from "preact";

interface ArticleProps {
	children: ComponentChildren;
}

export default function Article({ children }: ArticleProps) {
	return (
		<article className="custom-list prose prose-lg max-w-none prose-slate prose-invert">
			{children}
		</article>
	);
}
