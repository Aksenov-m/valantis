import React from 'react'
import './AppForm.css'
import AppInput from '../AppInput/AppInput'
import AppSelect from '../AppSelect/AppSelect'
import AppButton from '../AppButton/AppButton'

const AppForm = () => {
  return (
    <form id="valantis">
      <AppInput />
      <AppSelect />
      <AppButton>Найти</AppButton>
    </form>
  )
}

export default AppForm
