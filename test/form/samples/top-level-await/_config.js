module.exports = defineTest({
	expectedWarnings: ['CIRCULAR_DEPENDENCY'],
	description: 'top-level await support',
	formats: ['system', 'es', 'iife'],
	options: {
		output: {
			topLevelAwait: 'parallel-const'
		}
	}
});
