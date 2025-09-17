/// <reference types="vite/client" />

declare const __APP_VERSION__: string;

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const component: DefineComponent<object, object, any>;
	export default component;
}
