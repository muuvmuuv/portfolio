import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import {  version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
	],
	define: {
		__APP_VERSION__: JSON.stringify(version),
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
});
