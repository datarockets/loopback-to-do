import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class TodoCardContainer extends Component {
  state = {
    readiness: this.props.readiness,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      readiness={this.state.readiness}
      onChange={this.updateReadiness}
    />
  );

  updateReadiness = () => {
    if (this.isCompleted()) {
      api.card.completion.destroy(
        { id: this.props.id },
        () => {
          this.setState({ readiness: null })
        },
        (error) => {
          alert(error)
        },
      )
    } else {
      api.card.completion.create(
        { id: this.props.id },
        (response) => {
          this.setState({ readiness: response.card.readiness })
        },
        (error) => {
          alert(error)
        },
      )
    }
  }

  isCompleted = () =>
    this.state.readiness != null
}

TodoCardContainer.propTypes = {
  readiness: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default TodoCardContainer
