const { dependencies } = require('./package.json');

module.exports = {
	name: 'central_redux_store', // change me
	filename: 'remoteEntry.js',
	exposes: {
		'./store': './src/reduxStore/index.ts',
	},
	remotes: {},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			import: 'react', // fallback is also react
			shareScope: 'default',
			requiredVersion: dependencies.react,
		},
		"react-dom": {
			singleton: true,
			requiredVersion: dependencies["react-dom"],
		}
	}
}