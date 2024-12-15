import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

import { description, name, version } from "./package.json";

const themeColor = "#2a2c36";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mkcert(),
		vue(),
		tailwindcss(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			includeAssets: [
				"favicon.svg",
				"apple-touch-icon-180x180.png",
				"maskable-icon-512x512.png",
				"pwa-64x64.png",
				"pwa-192x192.png",
				"pwa-512x512.png",
			],
			manifest: {
				name,
				short_name: name,
				description,
				theme_color: themeColor,
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					name,
					description,
					currentYear: new Date().getFullYear(),
					themeColor,
				},
			},
		}),
	],
	resolve: {
		alias: [
			{
				// NOTE: https://github.com/vitejs/vite/issues/5764
				find: /^~(.*)$/,
				replacement: "$1",
			},
		],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					t: ["three"],
					f: [
						"@fortawesome/fontawesome-svg-core",
						"@fortawesome/free-brands-svg-icons",
						"@fortawesome/vue-fontawesome",
					],
				},
			},
		},
	},
	define: {
		__APP_VERSION__: JSON.stringify(version),
	},
});
