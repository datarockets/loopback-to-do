import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'
import api from './requests'

class TodoCardContainer extends Component {
  state = {
    readiness: this.props.readiness || false,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      readiness={this.state.readiness}
      onChange={this.updateReadiness}
    />
  );

  updateReadiness = (event) => {
    this.setState({ readiness: event.target.checked })
    api.card.update(
      { id: this.props.id, readiness: event.target.checked },
      (error) => {
        alert(error)
      },
    )
  }
}

TodoCardContainer.propTypes = {
  readiness: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default TodoCardContainer