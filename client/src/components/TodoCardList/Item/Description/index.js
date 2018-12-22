import React from 'react'
import PropTypes from 'prop-types'

const Description = props => (
  <div className="col-sm-8 text-left">
    <span>
      {props.text}
    </span>
  </div>
)

Description.propTypes = {
  text: PropTypes.string,
}

Description.defaultProps = {
  text: '',
}

export default Description
