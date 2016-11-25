var React = require('react');

var Header = React.createClass({
	render(){
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-4"><h1>React App</h1></div>
						<div className="col-md-8 text-right"></div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = Header;