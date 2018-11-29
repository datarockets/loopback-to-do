import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCard'

const TodoCardList = props => (
  <div className="col-sm-3 mx-auto">
    {
      props.todoCards.map(
        todoCard =>
          <TodoCard key={todoCard.id} description={todoCard.description} />,
      )
    }
  </div>
)

TodoCardList.propTypes = {
  todoCards: PropTypes.array.isRequired,
}

export default TodoCardList
