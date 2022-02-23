module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		// Forma correcta de deshabilitar el error de scope jsx en react
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		// ? Reglas para desactivar o habilitar algunos errores
		// Deshabilitar error de scope jsx
		// 'react/react-in-jsx-scope': 'off',
		
		// Modificar error de variables sin usar
		'no-unused-vars': 'warn',

		// 'react/prop-types': 'off'
	},
};
