const path = require('path');
const startsWith = require('lodash/startsWith');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'js/site': './js/index.js',
		'css/site': './css/index.scss',
	},
	watch: true,
	mode: 'development',
	devtool: 'source-map',
	output: {
		path: path.resolve(process.cwd(), 'public'),
		filename({ chunk }) {
			const { name } = chunk;
			if (startsWith(name, 'css/')) return `${name}.css`.replace('css/', '');
			return `${name}.js`.replace('js/', '');
		},
	},
	module: {
		rules: [
			{
				// type: 'javascript/auto',
				test: /\.js$|\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				// sass / scss loader for webpack
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader?url=false'
						},
						{
							loader: 'sass-loader'
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		],
	},
	plugins: [
		// define where to save the file
		new ExtractTextPlugin({
			filename(getPath) {
				return getPath('[name].css').replace('css/', '');
			},
		})
	],
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.scss'
		],
	},
};