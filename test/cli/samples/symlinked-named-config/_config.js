module.exports = defineTest({
	skip: true, // mystery error!
	description: 'loads a symlinked config file with the given name',
	command: 'rollup --config my.rollup.config.js --bundleConfigAsCjs',
	execute: true
});
