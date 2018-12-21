import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'mdbreact'

import styles from './styles.css'

const DeletionButton = props => (
  <div className="col-sm-2 utility__container" styles={styles}>
    <Button
      onClick={props.onClick}
      color="danger"
      className="delete__button delete__button-no-shadow fa fa-trash"
    />
  </div>
)

DeletionButton.propTypes = {
  onClick: PropTypes.func,
}

DeletionButton.defaultProps = {
  onClick: () => alert('DeletionButton onClick Handler'),
}

export default DeletionButton
