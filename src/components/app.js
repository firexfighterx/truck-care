/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
var Routes = require('./routes');
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
			</div>
		);
	}
});

module.exports = App;