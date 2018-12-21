import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Button } from 'mdbreact'

import styles from './styles.css'

const Item = props => (
  <div className="pt-1" styles={styles}>
    <Card>
      <CardBody>
        <div className="row d-flex align-items-center">
          <div className="col-sm-2 utility__container">
            <input
              type="checkbox"
              value=""
              onChange={props.onChange}
              checked={props.completed}
            />
          </div>
          <div className="col-sm-8 text-left">
            <span>
              {props.description}
            </span>
          </div>
          <div className="col-sm-2 utility__container">
            <Button color="danger" className="delete__button delete__button-no-shadow fa fa-trash" />
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
)

Item.propTypes = {
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Item
