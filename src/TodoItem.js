import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.item !== nextProps.item) return true;
		return false;
	}

	render() {
		const { item } = this.props;
		return <li onClick={this.handleItemDelete}>{item}</li>;
	}

	handleItemDelete() {
		const { handleItemDelete, index } = this.props;
		handleItemDelete(index);
	}
}

TodoItem.propTypes = {
	item: propTypes.string.isRequired,
	handleItemDelete: propTypes.func,
	index: propTypes.number
};
