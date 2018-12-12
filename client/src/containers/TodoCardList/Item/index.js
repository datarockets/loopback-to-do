import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class TodoCardContainer extends Component {
  state = {
    completedAt: this.props.completedAt,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      completedAt={this.state.completedAt}
      onChange={this.updateCompletedAt}
    />
  );

  updateCompletedAt = () => {
    if (this.isCompleted()) {
      api.card.completion.destroy(
        { id: this.props.id },
        () => {
          this.setState({ completedAt: null })
        },
        (error) => {
          alert(error)
        },
      )
    } else {
      api.card.completion.create(
        { id: this.props.id },
        (response) => {
          this.setState({ completedAt: response.card.completedAt })
        },
        (error) => {
          alert(error)
        },
      )
    }
  }

  isCompleted = () =>
    this.state.completedAt != null
}

TodoCardContainer.propTypes = {
  completedAt: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default TodoCardContainer
