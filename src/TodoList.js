import React, { Component, Fragment } from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: "",
			list: []
		}
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	render() {
		const { inputValue, list } = this.state
		return (
			<Fragment>
				<div>
					<input type="text" value={inputValue} onChange={this.handleInputChange} />
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>{this.getItem(list)}</ul>
			</Fragment>
		)
	}

	getItem(list) {
		return list.map((item, index) => {
			return <TodoItem item={item} index={index} key={index} handleItemDelete={this.handleItemDelete} />
		})
	}

	handleInputChange(e) {
		const inputValue = e.target.value
		this.setState(() => ({
			inputValue
		}))
	}

	handleBtnClick() {
		this.setState(prevState => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ""
		}))
	}

	handleItemDelete(idx) {
		this.setState(prevState => {
			const list = [...prevState.list]
			list.splice(idx, 1)
			return { list }
		})
	}
}
