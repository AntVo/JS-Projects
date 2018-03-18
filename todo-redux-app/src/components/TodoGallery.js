import React, { Component } from 'react';

export default class TodoGallery extends Component {

  renderTodos = () => {
  	const { todos, actions } = this.props;
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
