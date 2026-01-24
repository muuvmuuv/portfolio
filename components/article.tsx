interface ArticleProps {
	children: React.ReactNode;
}

export default function Article({ children }: ArticleProps) {
	return (
		<article className="prose prose-slate prose-invert max-w-none prose-lg custom-list">
			{children}
		</article>
	);
}
