$ = jQuery = require('jQuery');
var React = require('react');
var reactDom = require('react-dom');
var Home = require('./components/home');

reactDom.render(<Home />, document.getElementById('app'));
