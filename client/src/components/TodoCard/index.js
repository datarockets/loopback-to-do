import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardBody,
} from 'mdbreact'

const TodoCard = props => (
  <div className="pt-1">
    <Card>
      <CardBody className="text-left">
        <h5 className="mx-0 my-0">{props.description}</h5>
      </CardBody>
    </Card>
  </div>
)

TodoCard.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TodoCard
