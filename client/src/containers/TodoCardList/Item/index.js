import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class TodoCardContainer extends Component {
  state = {
    completed: !!this.props.completedAt,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      completed={this.state.completed}
      onChange={this.updateCompletedAt}
    />
  );

  updateCompletedAt = () => {
    if (this.state.completed) {
      api.card.completion.destroy(
        { id: this.props.id },
        () => {
          this.setState(state => ({ completed: !state.completed }))
        },
        error => {
          alert(error)
        },
      )
    } else {
      api.card.completion.create(
        { id: this.props.id },
        () => {
          this.setState(state => ({ completed: !state.completed }))
        },
        error => {
          alert(error)
        },
      )
    }
  }
}

TodoCardContainer.propTypes = {
  description: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  id: PropTypes.number.isRequired,
}

TodoCardContainer.defaultProps = {
  completedAt: '',
}

export default TodoCardContainer
