var React = require('react');
var PropTypes = React.PropTypes;
var InputBar = require('../styles').inputBar;
var SubmitStyle = require('../styles').buttonStyle;

var Input = React.createClass({

  render: function() {
    return (
      <div>
      <form class="form-control">
        <input style={InputBar}type="text" placeholder="type here" />
        <button class='btn btn-primary btn-success' type="submit">Submit</button>
      </form>
      </div>
    );
  }

});

module.exports = Input;
