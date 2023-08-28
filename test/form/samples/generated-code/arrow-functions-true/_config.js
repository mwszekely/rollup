module.exports = defineTest({
	description: 'uses arrow functions',
	skip: true, // mystery syntax
	options: {
		external: [
			'external',
			'externalAuto',
			'externalDefault',
			'externalDefaultOnly',
			'externalNoImport'
		],
		strictDeprecations: false,
		output: {
			generatedCode: { arrowFunctions: true },
			interop(id) {
				if (id === 'externalDefault') {
					return 'default';
				}
				if (id === 'externalDefaultOnly') {
					return 'defaultOnly';
				}
				if (id === 'externalAuto') {
					return 'auto';
				}
				return 'compat';
			},
			name: 'bundle',
			noConflict: true,
			dynamicImportInCjs: false,
			systemNullSetters: false
		}
	},
	expectedWarnings: ['DEPRECATED_FEATURE']
});
