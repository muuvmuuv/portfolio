import { Link } from "@tanstack/react-router";
import LogoBrand from "./logo-brand";

export default function Header() {
	return (
		<header className="container flex w-full py-5 sm:py-8 md:py-12">
			<Link
				id="logo"
				className="block text-primary h-6 shadow-primary select-none"
				to="/"
			>
				<LogoBrand />
			</Link>
		</header>
	);
}
