import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Input } from 'mdbreact'

const Item = props => (
  <div className="pt-1">
    <Card>
      <CardBody className="text-left">
        <Input
          checked={props.readiness}
          type="checkbox"
          id="checkbox1"
          label=<h5 className="mx-0 my-0">{props.description}</h5>
        />
      </CardBody>
    </Card>
  </div>
)

Item.propTypes = {
  readiness: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
}

export default Item
