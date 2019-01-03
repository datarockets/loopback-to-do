import React, { Component } from 'react'
import App from 'src/components/App'
import api from './requests'

class AppContainer extends Component {
  state = {
    todoCards: [],
  }

  componentDidMount() {
    api.cards.getAll(
      response => this.setState({ todoCards: response.data }),
      error => alert(error),
    )
  }

  render = () => (
    <App
      todoCards={this.state.todoCards}
      addTodoCard={this.addTodoCard}
      deleteTodoCard={this.deleteTodoCard}
    />
  )

  addTodoCard = card =>
    this.setState(state => ({ todoCards: [...state.todoCards, card] }))

  deleteTodoCard = cardId =>
    this.setState(state => ({ todoCards: state.todoCards.filter(el => el.id !== cardId) }))
}

export default AppContainer
