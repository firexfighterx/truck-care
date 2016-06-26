"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var About = require('./components/about/about');
var Home = require('./components/home');
var MainContentContainer = require('./components/mainContentContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContentContainer}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);

module.exports = routes;
