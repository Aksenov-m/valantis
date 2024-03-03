import React from 'react'
import styles from './ArrowButton.module.css'

const ArrowButton = ({ direction, onClick, isDisabled }) => {
  const arrowClassName = direction === 'left' ? styles.left : styles.right

  return (
    <button
      className={`${styles.arrow} ${arrowClassName}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}

export default ArrowButton
