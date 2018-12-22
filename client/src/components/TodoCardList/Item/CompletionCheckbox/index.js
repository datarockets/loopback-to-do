import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'underscore'

const CompletionCheckbox = props => (
  <div className="col-sm-2 utility__container">
    <input
      type="checkbox"
      value=""
      onChange={props.onChange}
      checked={props.checked}
    />
  </div>
)

CompletionCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

CompletionCheckbox.defaultProps = {
  onChange: noop,
  checked: false,
}

export default CompletionCheckbox
