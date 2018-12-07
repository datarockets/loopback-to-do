import React from 'react'
import PropTypes from 'prop-types'
import TodoCardContainer from 'src/containers/TodoCardList/Item'

const TodoCardList = props => (
  <div className="col-sm-3 mx-auto">
    {
      props.items.map(
        todoCard =>
          <TodoCardContainer key={todoCard.id} description={todoCard.description} />,
      )
    }
  </div>
)

TodoCardList.propTypes = {
  items: PropTypes.arrayOf(TodoCardContainer).isRequired,
}

export default TodoCardList
