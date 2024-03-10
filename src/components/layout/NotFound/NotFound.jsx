import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = (props) => {
  function onClickBack() {
    props.handleNavigateBack()
  }

  return (
    <div className={styles.container}>
      <p className={styles.description}>Ничего не найдено</p>
      <p className={styles.link}>
        <Link onClick={onClickBack} to="/valantis">
          На главную
        </Link>
      </p>
    </div>
  )
}

export default NotFound
