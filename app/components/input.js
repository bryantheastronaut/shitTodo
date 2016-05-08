var React = require('react');
var PropTypes = React.PropTypes;
var InputBar = require('../styles').inputBar;
var InputFocus = require('../styles')['inputBar:focus'];
var SubmitStyle = require('../styles').buttonStyle;
var FormBox = require('../styles').formBox;

var Input = React.createClass({
  render: function() {
    return (
      <div>
      <form style={FormBox}>
        <input
          id='todoInput'
          style={InputBar}
          type="text"
          placeholder="type here..."
          onChange={this.props.onChange}
        />
        <button
          style={SubmitStyle}
          onClick={this.props.onItemSubmit}
        >
          Submit
        </button>
      </form>
      </div>
    );
  }

});

module.exports = Input;
