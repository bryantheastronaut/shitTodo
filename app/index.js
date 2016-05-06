var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Input = require('./components/input');
var List = require('./components/list');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Input />
        <List />
      </div>
    )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
