/// <reference types="vite/client" />

declare const __APP_VERSION__: string;

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const component: DefineComponent<object, object, any>;
	export default component;
}
