var React = require('react');
var PropTypes = React.PropTypes;
var ListStyle = require('../styles').listStyle;
var ItemStyle = require('../styles').itemStyle;
var FinishButton = require('../styles').finishButton;
var DeleteButton = require('../styles').deleteButton;

var List = React.createClass({
  render: function() {
    let remove = this.props.removeTodo;
    return (
        <ul style={ListStyle}>
          {this.props.itemList.map(function(anItem, index){
            return <li key={index} style={ItemStyle}>
              <button
                style={DeleteButton}
                onClick={remove.bind(this, anItem)}
              >
                X
              </button>
              {anItem}
            </li>
          })}
        </ul>
    )
  }

});

module.exports = List;
