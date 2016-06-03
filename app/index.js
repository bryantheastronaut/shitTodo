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
  handleSubmit: function(e){
    e.preventDefault();
    this.setState({ items: this.state.items.concat(this.state.text) });
    document.getElementById('todoInput').value='';
    this.setState({ text: ''})
  },
  removeTodo: function(item){
    let fList = this.state.items.filter(function(itm){
      return item !== itm;
    });
    this.setState({ items: fList })
  },
  render: function() {
    return (
      <div style={BodyStyle}>
        <Header />
        <Input
          onChange={this.handleChange}
          onItemSubmit={this.handleSubmit}
        />
        <List
          itemList={this.state.items}
          removeTodo={this.removeTodo}
        />
      </div>
    )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
