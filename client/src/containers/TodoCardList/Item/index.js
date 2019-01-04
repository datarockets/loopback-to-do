import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class Item extends Component {
  state = {
    completed: !!this.props.completedAt,
    tags: this.props.tags,
  }

  render = () => (
    <TodoCard
      id={this.props.id}
      description={this.props.description}
      completed={this.state.completed}
      tags={this.state.tags}
      addTag={this.addTag}
      onChange={this.updateCompletedAt}
      onClick={this.deleteCard}
    />
  );

  deleteCard = () => {
    api.cards.delete(
      { id: this.props.id },
      () => { this.props.onDelete(this.props.id) },
      error => alert(error),
    )
  }

  updateCompletedAt = () => {
    if (this.state.completed) {
      api.cards.completion.delete(
        { id: this.props.id },
        () => this.setState(state => ({ completed: !state.completed })),
        error => alert(error),
      )
    } else {
      api.cards.completion.create(
        { id: this.props.id },
        () => this.setState(state => ({ completed: !state.completed })),
        error => alert(error),
      )
    }
  }

  addTag = tag =>
    this.setState(state => ({ tags: [...state.tags, tag] }))
}

Item.propTypes = {
  description: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  id: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
}

Item.defaultProps = {
  completedAt: '',
}

export default Item
