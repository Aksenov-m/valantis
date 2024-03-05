import React from 'react'
import './AppInput.css'

const AppInput = (props) => (
  <input
    className="input"
    type="text"
    placeholder="Найти..."
    value={props.filterText}
    onChange={props.handleChange}
  />
)
export default AppInput
