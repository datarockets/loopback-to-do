import React, { Component } from 'react'
import TodoCard from 'src/components/TodoCard'

class TodoCardListContainer extends Component {
  state = {
    todoCards: [],
  }

  componentDidMount() {
    this.setState({ todoCards: [{ description: 'kek' }] }) // remove it after complete endpoint
  }

  render = () => (
    <div className="col-sm-3 mx-auto">
      { this.state.todoCards.map(todoCard => <TodoCard description={todoCard.description} />) }
    </div>
  );
}

export default TodoCardListContainer
