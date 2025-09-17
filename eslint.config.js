import eslint from "@eslint/js";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import { globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import vue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfigWithVueTs(
	[globalIgnores(["*.d.ts", "**/coverage", "**/dist"])],
	eslint.configs.recommended,
	ts.configs.eslintRecommended,
	ts.configs.recommended,
	vue.configs["flat/essential"],
	vueTsConfigs.recommended,
	{
		files: ["**/*.vue"],
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
);
