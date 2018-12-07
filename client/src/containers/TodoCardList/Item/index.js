import React, { Component } from 'react'
import TodoCard from 'src/components/TodoCardList/Item'
import axios from 'axios'

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

export default TodoCardContainer
