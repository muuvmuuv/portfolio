import { Link } from "@tanstack/react-router";

import LogoBrand from "./logo-brand";

export default function Header() {
	return (
		<header className="container flex w-full py-5 sm:py-8 md:py-12">
			<Link id="logo" className="block h-6 text-primary shadow-primary select-none" to="/">
				<LogoBrand />
			</Link>
		</header>
	);
}
