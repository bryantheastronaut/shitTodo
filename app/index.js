var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Input = require('./components/input');
var List = require('./components/list');
var BodyStyle = require('./styles').bodyStyles;
var Bg =require('./styles').background;

var App = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      items: ['item', 'other item']
    }
  },
  handleChange: function(e){
    this.setState({
      text: e.target.value
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let newText = this.state.text;
    this.setState({
      items: this.state.items.concat({newText})
    })
  },
  render: function() {
    return (
      <div style={BodyStyle}>
        <Header />
        <Input />
        <List
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          text={this.state.text}
          items={this.state.items}
        />
      </div>
    )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
