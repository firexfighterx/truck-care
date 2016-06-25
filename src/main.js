$ = jQuery = require('jQuery');
var React = require('react');
var reactDom = require('react-dom');
var Home = require('./components/home');
var About = require('./components/about/about');

var App = React.createClass({
  render: function(){
    var Child;

    switch(this.props.route)
    {
      case '/about': Child = About; break;
      default: Child = Home;
    }

    return (
      <div><Child /></div>
    );
  }
});

function render(){
  var route = window.location.hash.substr(1);
  reactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('haschange', render);
render();
