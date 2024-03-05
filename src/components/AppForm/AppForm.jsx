import React from 'react'
import './AppForm.css'
import AppInput from '../AppInput/AppInput'
import AppSelect from '../AppSelect/AppSelect'
import AppButton from '../AppButton/AppButton'

const AppForm = (props) => {
  return (
    <form id="valantis" onSubmit={props.handleSubmit}>
      <AppInput
        filterText={props.filterText}
        handleChange={props.handleChange}
      />
      <AppSelect select={props.select} handleSelect={props.handleSelect} />
      <AppButton>Найти</AppButton>
    </form>
  )
}

export default AppForm
