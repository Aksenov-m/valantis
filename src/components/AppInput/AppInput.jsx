import React from 'react'
import './AppInput.css'

const AppInput = (props) => (
  <input
    className="input"
    type="text"
    placeholder="Найти..."
    onChange={(e) => props.onFilterTextChange(e.target.value)}
  />
)
export default AppInput
