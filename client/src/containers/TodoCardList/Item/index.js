import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'

class TodoCardContainer extends Component {
  state = {
    readiness: false,
  }

  render = () => (
    <TodoCard
      description={this.props.description}
      readiness={this.state.readiness}
      onChange={this.setReadiness}
    />
  );

  setReadiness = (event) => {
    this.setState({ readiness: event.target.value })
  }
}

TodoCardContainer.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TodoCardContainer
