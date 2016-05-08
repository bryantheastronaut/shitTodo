var React = require('react');
var PropTypes = React.PropTypes;
var ListStyle = require('../styles').listStyle;
var ItemStyle = require('../styles').itemStyle;

var List = React.createClass({
  render: function() {
    return (
        <ul style={ListStyle}>
          {this.props.itemList.map(function(anItem, index){
            return <li key={index} style={ItemStyle}>{anItem}</li>
          })}
        </ul>
    )
  }

});

module.exports = List;
