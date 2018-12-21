import React from 'react'
import PropTypes from 'prop-types'

const Description = props => (
  <div className="col-sm-8 text-left">
    <span>
      {props.description}
    </span>
  </div>
)

Description.propTypes = {
  description: PropTypes.string,
}

Description.defaultProps = {
  description: '',
}

export default Description
