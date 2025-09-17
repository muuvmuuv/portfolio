import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
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
});
