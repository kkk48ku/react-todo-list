import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		// 当组件的state或者props发生改变的时候，render函数就会重新执行
		this.state = {
			inputValue: '',
			list: []
		};
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	render() {
		const { inputValue, list } = this.state;
		return (
			<Fragment>
				<div>
					<input type="text" value={inputValue} onChange={this.handleInputChange} />
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>{this.getItem(list)}</ul>
			</Fragment>
		);
	}

	componentDidMount() {
		axios
			.get('/api/todoList')
			.then(res => {
				this.setState(() => ({
					list: [...res.data]
				}));
			})
			.catch(err => {
				throw new Error(err);
			});
	}

	getItem(list) {
		return list.map((item, index) => {
			return <TodoItem item={item} index={index} key={index + item} handleItemDelete={this.handleItemDelete} />;
		});
	}

	handleInputChange(e) {
		const inputValue = e.target.value;
		this.setState(() => ({
			inputValue
		}));
	}

	handleBtnClick() {
		this.setState(prevState => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	handleItemDelete(idx) {
		this.setState(prevState => {
			const list = [...prevState.list];
			list.splice(idx, 1);
			return { list };
		});
	}
}
