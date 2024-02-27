import React from 'react'
import './AppSelect.css'

const AppSelect = (props) => {
  const dataSelect = [
    { nameRu: 'название', nameEn: 'name' },
    { nameRu: 'цена', nameEn: 'price' },
    { nameRu: 'бренд', nameEn: 'brand' },
  ]

  return (
    <label>
      <select
        id="valantis"
        className="control"
        value={props.select}
        onChange={(e) => props.handleSelect(e.target.value)}
      >
        {dataSelect.map((item) => (
          <option key={item.nameEn} value={item.nameEn}>
            {item.nameRu}
          </option>
        ))}
      </select>
    </label>
  )
}

export default AppSelect
