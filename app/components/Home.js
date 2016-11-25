var React = require('react');

var Home = React.createClass({
	render(){
		return(
			<div id="intro">
			<h1>Boilerplate for React App</h1>
			<p>Includes Webpack, Babel, Style & CSS Loader, and Routing</p>
			</div>
		);
	}
});

module.exports = Home;