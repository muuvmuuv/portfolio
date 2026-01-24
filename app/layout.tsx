import "@fontsource-variable/inter";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "Marvin.Digital - M/D",
	description: "Portfolio of and by Marvin Heilemann (@muuvmuuv)",
	metadataBase: new URL("https://marvin.digital"),
	icons: {
		icon: "/favicon.svg",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		images: ["/og.jpg"],
	},
};

export const viewport: Viewport = {
	themeColor: "#04050b",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" dir="ltr" className="w-full h-full">
			<head>
				<link rel="mask-icon" href="/mask-icon.svg" color="#04050b" />
				<Script
					src="https://sa.marvin.digital/latest.js"
					strategy="afterInteractive"
				/>
			</head>
			<body className="w-full h-full overscroll-none antialiased bg-gradient-to-tl from-secondary-900 to-secondary-700 bg-fixed">
				<div className="w-full h-full grid overflow-x-hidden grid-rows-[auto_1fr_auto]">
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
				<noscript>
					{/* biome-ignore lint/performance/noImgElement: tracking pixel for analytics */}
					<img
						src="https://sa.marvin.digital/noscript.gif"
						alt=""
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</noscript>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
