import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import { version } from "./package.json";

// Plugin to copy index.html to 200.html for SPA fallback on Vercel
function spaFallback() {
	return {
		name: "spa-fallback",
		closeBundle() {
			const outDir = resolve(import.meta.dirname, "dist");
			copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "200.html"));
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), tailwindcss(), spaFallback()],
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
