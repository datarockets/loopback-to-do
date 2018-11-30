import React, { Component } from 'react'
import App from 'src/components/App'
import api from './requests'

class AppContainer extends Component {
  state = {
    todoCards: [],
  }

  componentDidMount() {
    api.cards.getAll(
      (response) => { this.setState({ todoCards: response }) },
      (error) => {
        alert(error)
        this.setState({ todoCards: [{ id: 1, description: 'kek' }, { id: 2, description: 'azaza' }] }) // remove after completing endpoint
      },
    )
  }

  render = () => (
    <App
      todoCards={this.state.todoCards}
      addTodoCard={this.addTodoCard}
    />
  )

  addTodoCard = (card) => {
    this.setState(state => ({ todoCards: [...state.todoCards, card] }))
  }
}

export default AppContainer
