import React, { Component } from 'react';

export default class TodoTextInput extends Component {


	handleSubmit = (event) => {
			event.preventDefault();
			this.props.addTodo(this.refs.input.value);
			this.refs.input.value = '';
	}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<input type="text" ref="input"></input>
      	<button>Submit</button>
      </form>
    )
  }
}
