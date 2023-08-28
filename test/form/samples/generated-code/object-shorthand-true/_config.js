module.exports = defineTest({
	description: 'uses object shorthand syntax',
	skip: true, // mystery syntax
	options: {
		output: {
			exports: 'named',
			format: 'system',
			generatedCode: { objectShorthand: true },
			name: 'bundle'
		}
	}
});
