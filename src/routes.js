"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var About = require('./components/about/about');
var Home = require('./components/home');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
  </Router>
);

module.exports = routes;
