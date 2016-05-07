var React = require('react');
var PropTypes = React.PropTypes;
var HeaderStyle = require('../styles').headerStyle;


var Header = React.createClass({

  render: function() {
    return (
      <div style={HeaderStyle}><h1>Shit To Do (The App)</h1></div>
    );
  }

});

module.exports = Header;
