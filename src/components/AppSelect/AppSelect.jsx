import React from 'react'
import './AppSelect.css'

const AppSelect = (props) => {
  const dataSelect = [
    { nameRu: 'название', nameEn: 'name' },
    { nameRu: 'цена', nameEn: 'price' },
    { nameRu: 'бренд', nameEn: 'brand' },
  ]

  return (
    <select id="valantis" className="control">
      {dataSelect.map((item) => (
        <option key={item.nameEn} value={item.nameEn}>
          {item.nameRu}
        </option>
      ))}
    </select>
  )
}

export default AppSelect
