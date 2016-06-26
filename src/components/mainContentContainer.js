var React = require('react');
var Header = require('./common/header');

var MainContentContainer = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
      );
  }
});

module.exports = MainContentContainer;
