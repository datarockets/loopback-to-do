import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class Item extends Component {
  state = {
    completed: !!this.props.completedAt,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      completed={this.state.completed}
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
}

Item.propTypes = {
  description: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
}

Item.defaultProps = {
  completedAt: '',
}

export default Item
