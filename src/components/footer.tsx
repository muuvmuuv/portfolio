import { Link } from "@tanstack/react-router";

import packageJson from "../../package.json";

export default function Footer() {
	const year = new Date().getFullYear();
	const version = packageJson.version;

	return (
		<footer className="container flex w-full justify-between py-5 font-mono text-sm text-secondary-400 opacity-40 select-none sm:py-8 md:py-12">
			<div>
				<Link to="/imprint" className="transition-colors hover:text-secondary-600">
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
					className="transition-colors hover:text-secondary-600"
				>
					v{version}
				</a>
			</div>
		</footer>
	);
}
