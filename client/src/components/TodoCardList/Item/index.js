import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody } from 'mdbreact'

import DeletionButton from './DeletionButton'
import Description from './Description'
import CompletionCheckbox from './CompletionCheckbox'

const Item = props => (
  <div className="pt-1">
    <Card>
      <CardBody>
        <div className="row d-flex align-items-center">
          <CompletionCheckbox onChange={props.onChange} checked={props.completed} />
          <Description description={props.description} />
          <DeletionButton onClick={props.onClick} />
        </div>
      </CardBody>
    </Card>
  </div>
)

Item.propTypes = {
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Item
