import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
      return this.props.todos.map((i) =>
      	<TodoItem key={i.id} todo={i} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
      	)
  }

}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplet: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}

export default Todos;
