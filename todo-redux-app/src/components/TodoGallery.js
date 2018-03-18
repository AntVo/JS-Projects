import React, { Component } from 'react';

export default class TodoGallery extends Component {

  renderTodos = () => {
  	const { todos } = this.props;
  	console.log(todos);
  	return todos.map(todo => 
  		<div>{todo.text}</div>
  	)
  }

  render() {
    return (
      <div> 
        {this.renderTodos()}
      </div>
    )
  }
}
