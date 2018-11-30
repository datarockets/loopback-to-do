import React from 'react'
import './styles.css'
import Header from 'src/components/Header'
import CreateCardFormContainer from 'src/containers/CreateCardFormContainer'
import TodoCardList from 'src/components/TodoCardList'
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
          <TodoCardList items={props.todoCards} />
        </section>
      </div>
    </div>
  </div>
)

App.propTypes = {
  todoCards: PropTypes.array.isRequired,
  addTodoCard: PropTypes.func.isRequired,
}

export default App
