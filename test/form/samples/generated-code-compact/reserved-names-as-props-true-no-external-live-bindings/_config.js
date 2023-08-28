module.exports = defineTest({
	description: 'escapes reserved names used as props when external live-bindings are off',
	skip: true, // mystery syntax
	options: {
		external: ['external'],
		output: {
			compact: true,
			exports: 'named',
			externalLiveBindings: false,
			generatedCode: { reservedNamesAsProps: true },
			interop: 'compat',
			name: 'bundle'
		}
	}
});
