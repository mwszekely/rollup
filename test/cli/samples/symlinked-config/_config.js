module.exports = defineTest({
	skip: true, // mystery error!
	description: 'loads a symlinked config file',
	command: 'rollup -c --bundleConfigAsCjs',
	execute: true
});
