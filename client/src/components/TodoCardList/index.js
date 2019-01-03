import React from 'react'
import PropTypes from 'prop-types'
import TodoCardContainer from 'src/containers/TodoCardList/Item'
import TodoCard from 'src/components/TodoCardList/Item'

const TodoCardList = props => (
  <div className="col-sm-3 mx-auto">
    {
      props.items.map(todoCard => (
        <TodoCardContainer
          key={todoCard.id}
          id={todoCard.id}
          description={todoCard.description}
          completedAt={todoCard.completedAt}
          onDelete={props.onDelete}
        />
      ))
    }
  </div>
)

TodoCardList.propTypes = {
  items: PropTypes.arrayOf(TodoCard).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TodoCardList
