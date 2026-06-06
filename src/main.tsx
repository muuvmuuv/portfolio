import "@fontsource-variable/inter";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import {
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
	RouterProvider,
} from "@tanstack/react-router";
import { render } from "preact";

import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/home";
import ImprintPage from "./pages/imprint";

const rootRoute = createRootRoute({
	component: () => (
		<div className="h-full w-full bg-linear-to-tl from-secondary-900 to-secondary-700 bg-fixed antialiased">
			<div className="grid h-full w-full grid-rows-[auto_1fr_auto] overflow-x-hidden">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	),
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
});

const imprintRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/imprint",
	component: ImprintPage,
});

const routeTree = rootRoute.addChildren([indexRoute, imprintRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");
if (rootElement) {
	render(<RouterProvider router={router} />, rootElement);
}
