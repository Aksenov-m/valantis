import React from 'react'
import './AppButton.css' // Assuming you have a CSS file for button styles

const AppButton = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default AppButton
