import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.description}>
        Извините, страница, которую вы ищете возможно в режиме разработки.
      </p>
      <p className={styles.link}>
        <Link to="/valantis">На главную</Link>
      </p>
    </div>
  )
}

export default ErrorPage
