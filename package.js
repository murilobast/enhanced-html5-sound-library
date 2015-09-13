Package.describe({
	name: 'murilobast:sound',
	version: '1.0.1',
	summary: 'Enhanced HTML5 audio library.',
	git: 'http://github.com/murilobast/enhanced-html5-sound-library',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.addFiles('sound.js');
	api.export('Sound', 'client');
});
