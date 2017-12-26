module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		// indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	plugins: ['html'],
	settings: {
		'html/html-extensions': ['.html']
	}
};
