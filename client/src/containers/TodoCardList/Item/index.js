import React, { Component } from 'react'
import Item from 'src/components/TodoCardList/Item'
import axios from 'axios'

class TodoCardContainer extends Component {
  state = {
    readiness: false,
  }

  render = () => (
    <Item
      readiness={this.state.readiness}
      onChange={this.setReadiness}
    />
  );

  setReadiness = (event) => {
    this.setState({ readiness: event.target.value })
  }
}

export default TodoCardContainer
