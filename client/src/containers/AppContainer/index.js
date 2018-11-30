import React, { Component } from 'react'
import App from 'src/components/App'
import axios from 'axios'

class AppContainer extends Component {
  state = {
    todoCards: [{ id: 1, description: 'kek' }, { id: 2, description: 'azaza' }], // remove it after complete endpoint
    todoCardForm: { description: '' },
  }

  componentDidMount() {
    this.fetchTodoList()
  }

  render = () => (
    <App
      todoCards={this.state.todoCards}
      todoCardForm={this.state.todoCardForm}
      addTodoCard={this.addTodoCard}
    />
  )

  addTodoCard = (card) => {
    this.setState(state => ({ todoCards: [...state.todoCards, card] }))
  }

  async fetchTodoList() {
    let response
    try {
      response = await axios.get('http://localhost:5000/api/v1/cards')
      this.setState(response)
    } catch (error) {
      alert(error)
    }
  }
}

export default AppContainer
