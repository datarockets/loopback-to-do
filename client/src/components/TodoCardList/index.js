import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from 'src/components/TodoCardList/Item'

const TodoCardList = props => (
  <div className="col-sm-3 mx-auto">
    {
      props.items.map(
        todoCard =>
          <TodoCard key={todoCard.id} description={todoCard.description} />,
      )
    }
  </div>
)

TodoCardList.propTypes = {
  items: PropTypes.arrayOf(TodoCard).isRequired,
}

export default TodoCardList
