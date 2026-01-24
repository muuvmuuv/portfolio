import Link from "next/link";
import packageJson from "../package.json";

export default function Footer() {
	const year = new Date().getFullYear();
	const version = packageJson.version;

	return (
		<footer className="container flex w-full py-5 sm:py-8 md:py-12 justify-between text-secondary-400 opacity-40 font-mono text-sm select-none">
			<div>
				<Link
					href="/imprint"
					className="hover:text-secondary-600 transition-colors"
				>
					Imprint
				</Link>
			</div>
			<div>
				<span>{year} &copy; Marvin Heilemann</span>
				<span> &middot; </span>
				<a
					href="https://github.com/muuvmuuv/portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-secondary-600 transition-colors"
				>
					v{version}
				</a>
			</div>
		</footer>
	);
}
