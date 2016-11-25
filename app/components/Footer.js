var React = require('react');

var Footer = React.createClass({
	render(){
		return(
			<footer>
				<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">&copy; Copyright 2016. All Rights Reserved.</div>
				</div>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;