import React, { Component } from 'react';
class Input extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { value:'' }
	}

	handleChange(e) {
		
	}

	render() {
		return (
			<div>
				<input type = "text" onChange = { this.handleChange } />
				<label>{ this.state.value }</label>
			</div>
		)
	}
}
export default Input;