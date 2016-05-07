var React = require('react');
var PropTypes = React.PropTypes;

var List = React.createClass({

  render: function() {
    return (
      <div>
        <ul>
          {this.props.items.map(function(item){
            <li>{item}</li>
          })}
        </ul>
      </div>
    );
  }

});

module.exports = List;
