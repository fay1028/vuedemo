'use strict';

var vue = require('vue-loader')
var webpack = require('webpack')
module.exports = {
	entry: "./src/main.js",
	output: {
		path: './static',
		publicPath: '/static/',
		filename: 'build.js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, 
		{
			test: /\.js$/,
			exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
			loader: 'babel'
		}, 
		{ test: /\.css$/, loader: "style-loader!css-loader" }, 
		{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }, 
	    { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" }, 
		{ test: /\.woff$/, loader: "url-loader" },
	    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2"},
	    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
	    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
	    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"}]
    },
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
};