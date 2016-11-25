var React = require('react');

var Header = require('../components/Header');
var Footer = require('../components/Footer');

var Main = React.createClass({
	render(){
		return(
		<div>
			<Header />
			<div id="main-container" className="container">{this.props.children}</div>
			<Footer />
		</div>);
	}
});

module.exports = Main;