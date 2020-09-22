module.exports = {
	env: {
		browser: true
	},
	ignorePatterns: ["**/*.js"],
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	plugins: [
	  '@typescript-eslint',
	],
	rules: {
		"@typescript-eslint/prefer-readonly": "error"
	}
};