var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename:'index.html',
	index: 'body'
});

module.exports = {
	entry:[
		'./app/index.js'
	],
	output:{
		path:__dirname + '/dist',
		filename: "index_bundle.js"
	},
	module:{
		loaders:[
			{test:/\.js$/, exclude: /node_modules/, loader:"babel-loader"},
			{
				test: /\.css$/, 
				loaders: [
					"style-loader", 
					"css-loader"
				] 
			},
			{
				test: /\.scss$/, 
				loaders: [
					"style-loader", 
					"css-loader", 
					"sass-loader"
				] 
			},
			{ 
	        	test: /\.png$/, 
	        	loader: "url-loader?limit=100000" 
		      },
		      { 
		        test: /\.jpg$/, 
		        loader: "file-loader" 
		      },
		      {
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/font-woff'
		      },
		      {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/octet-stream'
		      },
		      {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file'
		      },
		      {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=image/svg+xml'
		      }
		] 
	},
	plugins: [HtmlWebpackPluginConfig]
}