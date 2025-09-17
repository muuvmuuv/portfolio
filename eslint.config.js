import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import vue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";
import prettier from "eslint-config-prettier/flat";

export default defineConfig(
	[globalIgnores(["*.d.ts", "**/coverage", "**/dist"])],
	eslint.configs.recommended,
	ts.configs.strict,
	ts.configs.stylistic,
vue.configs["flat/strongly-recommended"],
{
	files: ['*.vue', '**/*.vue'],
	languageOptions: {
		globals: globals.browser,
		parserOptions: {
			parser: ts.parser
		}
		},
		rules: {
			"vue/html-indent": ["error", "tab"],
		},
	},
	prettier
);
