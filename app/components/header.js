var React = require('react');
var PropTypes = React.PropTypes;
var centerText = require('../styles').centerText;
var bg = require('../styles').background;

var Header = React.createClass({

  render: function() {
    return (
      <div style={bg}><h1 style={centerText}>Shit To Do (The App)</h1></div>
    );
  }

});

module.exports = Header;
