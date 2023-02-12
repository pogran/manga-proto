module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'linebreak-style': [
			'error',
			process.env.NODE_ENV === 'prod' ? 'unix' : 'windows',
		],
		'prettier/prettier': [
			2,
			{
				tabWidth: 2,
				useTabs: true,
				singleQuote: true,
				endOfLine: 'auto',
			},
		],
		indent: ['warn', 'tab', { ignoredNodes: ['PropertyDefinition'] }],
		'@typescript-eslint/no-empty-function': 0,
	},
};
