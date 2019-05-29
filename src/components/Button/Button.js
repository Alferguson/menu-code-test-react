import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ isDisabled }) => {
  return (
    <button disabled={isDisabled}>
      {isDisabled ? (
        <p>not submit</p>
      ) : (
        <p>submit</p>
      )}
    </button>
  )
}

Button.propTypes = {
  isDisabled: PropTypes.bool
}

export default Button;
