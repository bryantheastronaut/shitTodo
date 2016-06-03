var React = require('react');
var PropTypes = React.PropTypes;
var HeaderStyle = require('../styles').headerStyle;
var ImageStyle = require('../styles').imageStyle;


var Header = React.createClass({

  render: function() {
    return (
      <div style={HeaderStyle}><img style={ImageStyle} src="../../images/shittodoHeader.jpg" alt="header"/></div>
    );
  }

});

module.exports = Header;
