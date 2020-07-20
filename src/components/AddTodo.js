import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	state = {
		title: ''
	}

	addingTitle = (e) => this.setState({[e.target.name]: e.target.value})
	onSubmit = (e) => {
		e.preventDefault()
		this.props.addingTodo(this.state.title)
		this.setState({title:''})
	}

	render() {
		return(
			<form onSubmit={this.onSubmit} style={{display:'flex'}}>
				<input 
				type="text"
				 name="title"
				 style={{flex: '10', padding: '5px'}}
				 placeholder="Add Todo..."
				 onChange={this.addingTitle}
				 value={this.state.title}
				 />
				<input 
				type="submit" 
				value="Submit" 
				className="btn" 
				style={{flex: '1'}}
				/>
			</form>
			)
	}
}

AddTodo.propTypes = {
	
	addingTodo: PropTypes.func.isRequired
}

export default AddTodo;