module.exports = defineTest({
	description: 'escapes reserved names used as props',
	skip: true, // mystery syntax
	options: {
		external: ['external', 'external2', 'externalDefaultOnly'],
		output: {
			compact: true,
			exports: 'named',
			generatedCode: { reservedNamesAsProps: true },
			interop(id) {
				if (id === 'externalDefaultOnly') return 'defaultOnly';
				return 'auto';
			},
			name: 'bundle'
		},
		plugins: [
			{
				name: 'test',
				transform() {
					return { syntheticNamedExports: true };
				}
			}
		]
	}
});
