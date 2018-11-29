import React, { Component } from 'react'
import TodoCardList from 'src/components/TodoCardList'
import axios from 'axios'

class TodoCardListContainer extends Component {
  state = {
    todoCards: [],
  }

  componentDidMount() {
    this.setState({ todoCards: [{ id: 1, description: 'kek' }] }) // remove it after complete endpoint
    this.fetchList()
  }

  render = () => (
    <TodoCardList todoCards={this.state.todoCards} />
  );

  async fetchList() {
    let response
    try {
      response = await axios.get('http://localhost:5000/api/v1/cards')
      this.setState(response)
    } catch (error) {
      alert(error)
    }
  }
}

export default TodoCardListContainer
