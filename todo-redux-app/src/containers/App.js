import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
//components
import TodoGallery from '../components/TodoGallery';
import TodoTextInput from '../components/TodoTextInput';


const App = ({ todos, actions }) => (
      <div> 
        <TodoTextInput addTodo={actions.addTodo} />
        <TodoGallery todos={todos} actions={actions}/>
      </div>
)

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)