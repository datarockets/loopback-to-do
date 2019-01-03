import React from 'react'
import './styles.css'
import Header from 'src/components/Header'
import CreateCardFormContainer from 'src/containers/CreateCardForm'
import TodoCardList from 'src/components/TodoCardList'
import TodoCard from 'src/components/TodoCardList/Item'
import PropTypes from 'prop-types'

const App = props => (
  <div className="app">
    <Header />
    <div className="pt-4">
      <div className="container-fluid">
        <section>
          <CreateCardFormContainer onCreate={props.addTodoCard} />
        </section>
        <section>
          <TodoCardList items={props.todoCards} onDelete={props.deleteTodoCard} />
        </section>
      </div>
    </div>
  </div>
)

App.propTypes = {
  todoCards: PropTypes.arrayOf(TodoCard).isRequired,
  addTodoCard: PropTypes.func.isRequired,
  deleteTodoCard: PropTypes.func.isRequired,
}

export default App
