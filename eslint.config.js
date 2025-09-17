
import eslint from "@eslint/js";
import vue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["*.d.ts", "**/dist/**"]
	},
	eslint.configs.recommended,
	...vue.configs["flat/strongly-recommended"],
	{
		files: ["**/*.vue"],
		languageOptions: {
			globals: globals.browser,
		},
		rules: {
			"vue/html-indent": ["error", "tab"],
		},
	},
);
