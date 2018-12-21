import React from 'react'
import PropTypes from 'prop-types'

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
  onChange: () => alert('CompletionCheckbox onChange Handler'),
  checked: false,
}

export default CompletionCheckbox
