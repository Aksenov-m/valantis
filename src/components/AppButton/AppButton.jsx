import React from 'react'
import './AppButton.css' // Assuming you have a CSS file for button styles

const AppButton = ({ children }) => {
  return (
    <button className="custom-button" type="submit">
      {children}
    </button>
  )
}

export default AppButton
