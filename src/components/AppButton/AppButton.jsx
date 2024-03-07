import React from 'react'
import { Link } from 'react-router-dom'
import './AppButton.css'

const AppButton = ({ children, isDisabled }) => {
  return (
    <button disabled={isDisabled} className="custom-button" type="submit">
      {children}
    </button>
  )
}

export default AppButton
