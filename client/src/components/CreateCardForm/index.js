// import styles from './styles.css';
import React from 'react'
import PropTypes from 'prop-types'

const CreateCardForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input id='kek' value={props.description} onChange={props.handleChange} />
    <input
      type='submit'
      value='Add'
    />
  </form>
)

CreateCardForm.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default CreateCardForm
