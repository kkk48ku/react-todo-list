import React, { Component } from "react"

export default class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	render() {
		const { item } = this.props
		return <li onClick={this.handleItemDelete}>{item}</li>
	}
	handleItemDelete() {
		const { handleItemDelete, index } = this.props
		handleItemDelete(index)
	}
}
